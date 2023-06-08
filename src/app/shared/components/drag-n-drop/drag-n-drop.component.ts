import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: ' app-drag-n-drop',
    templateUrl: './drag-n-drop.component.html',
    styleUrls: ['./drag-n-drop.component.scss'],
})
export class DragNDropComponent implements OnInit {
    @Input() public label: string = 'Add your file';
    @Input() public formGroup?: FormGroup;
    @Input() public controlName?: string;

    @ViewChild('fileDropRef', { static: false }) fileDropEl!: ElementRef;

    @Output() public fileUploaded = new EventEmitter<File>();

    onChange: (newValue: File) => void = () => {};
    onTouch: () => void = () => {};

    public file?: File;
    public clicked: boolean = false;

    get fc() {
        return this.formGroup?.controls;
    }

    constructor(public cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    public setValue(file: File) {
        this.file = file;
        this.cd.markForCheck();

        this.onChange(this.file);
        this.onTouch();
        this.fileUploaded.emit(this.file);
    }

    public handleBrowse(event: Event): void {
        const { target } = event;
        const fileEvent = target as HTMLInputElement;

        if (fileEvent.files) {
            const file = fileEvent.files[0];
            this.setFile(file);
            this.clicked = false;
        }
    }

    public clear(): void {
        this.fileDropEl.nativeElement.value = '';
    }

    public setFile(file: File): void {
        if (file) {
            this.setValue(file);
        }
    }

    public showDragDrop(): boolean {
        return (this.clicked = true);
    }
}
