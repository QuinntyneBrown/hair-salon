import { Component, ChangeDetectionStrategy, Input, OnInit, ElementRef } from "@angular/core";

@Component({
    template: require("./home.component.html"),
    styles: [require("./home.component.scss")],
    selector: "h-home",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit { 
    constructor(private _elementRef: ElementRef) {
        
    }
    ngOnInit() {
        
    }
}
