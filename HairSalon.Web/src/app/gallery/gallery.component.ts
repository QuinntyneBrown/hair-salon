import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./gallery.component.html"),
    styles: [require("./gallery.component.scss")],
    selector: "h-gallery",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit { 
    ngOnInit() {

    }
}
