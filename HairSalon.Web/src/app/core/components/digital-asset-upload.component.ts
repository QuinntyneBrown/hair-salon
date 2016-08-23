import {
    Component,
    ChangeDetectionStrategy,
    Input,
    OnDestroy,
    OnInit,
    ElementRef,
    EventEmitter
} from "@angular/core";

@Component({
    template: require("./digital-asset-upload.component.html"),
    styles: [require("./digital-asset-upload.component.scss")],
    selector: "h-digital-asset-upload",
    outputs: ['onUpload'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalAssetUploadComponent implements OnInit, OnDestroy { 
    constructor(private _elementRef: ElementRef) { }

    public onUpload: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        this.drop.addEventListener("dragover", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
        }, false);

        this.drop.addEventListener("drop", this.upload, false);
    }

    ngOnDestroy() { this.drop.removeEventListener("drop", this.upload, false); }

    upload = data => { this.onUpload.emit(data); }

    get drop() { return $(this._elementRef.nativeElement).find(".drop-zone")[0]; }
}
