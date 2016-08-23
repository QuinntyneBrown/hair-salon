import { Component, ChangeDetectionStrategy, Input, OnInit, ElementRef } from "@angular/core";
import { Photo } from "./shared";

@Component({
    template: require("./photo-gallery.component.html"),
    styles: [require("./photo-gallery.component.scss")],
    selector: "h-photo-gallery",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryComponent implements OnInit { 
    constructor(private _elementRef: ElementRef) { }

    ngOnInit() {
        
    }

    @Input() public photos: Array<Photo> = [];    
}
