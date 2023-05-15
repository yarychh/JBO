import {
    ChangeDetectorRef,
    Component,
    ElementRef, EventEmitter, Input,
    OnInit, Output,
    ViewChild
} from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Event } from "@angular/router";

@Component({
    selector: 'app-drag-n-drop',
    templateUrl: './drag-n-drop.component.html',
    styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent implements OnInit {
    @Input() public label: string = 'Add your file';
    @Input() public formGroup?: FormGroup;
    @Input() public controlName?: string;

    @ViewChild('fileDropRef', { static: false }) fileDropEl!: ElementRef;

    @Output() public fileUploaded = new EventEmitter<File>();

    public files: [] = [];
    public clicked: boolean = false;

    get fc() {
        return this.formGroup?.controls;
    }

    constructor(public cd: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

    public handleDrop(files: any) {
        this.prepareFilesList(files);
    }

    public handleBrowse(files: any) {
        this.prepareFilesList(files);
    }


    private prepareFilesList(event: any) {
        // const { files } = event.target;
        // for (const item of files ) {
        //     this.files.push(item);
        // }
        // this.clear();
    }

    public setValue(value: string) {
    //         this.value = value;
    //         this.cd.markForCheck();
    //
    //         this.onChange(this.value);
    //         this.onTouch();
    //         this.fileUploaded.emit(this.value);
    }

    public handleFileInput(event: Event): void {
        // const { target } = event;
        // const files = (target as HTMLInputElement).files;

        // this.setPhotoGallery(files);
    }

    public clear(): void {
        this.fileDropEl.nativeElement.value = '';
    }

    public setPhotoGallery(files: FileList | null): void {
        if (files && files.length) {
            const reader = new FileReader();

            reader.onload = e => {
                if (!e.target) return;
                const file = e.target.result;

                // this.setValue(file);
            };
            reader.readAsBinaryString(files[0]);
        }
    }

    public showDragDrop(): boolean {
        return !this.clicked;
    }
}
