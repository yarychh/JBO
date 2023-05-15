import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import { FirestoreService } from "../services/firestore.service";

@Directive({
    selector: '[dnd]'
})
export class DragNDropDirective {
    constructor(private firestore: FirestoreService) {
    }


    @Output() fileDropped = new EventEmitter<any>();

    // Dragover listener
    @HostListener('dragover', ['$event'])
    public onDragOver(event: Event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Dragleave listener
    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: Event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Drop listener
    // @ts-ignore
    @HostListener('drop', ['$event'])
    public ondrop(event: any) {
        event.preventDefault();
        event.stopPropagation();
        let files = event.originalEvent.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
