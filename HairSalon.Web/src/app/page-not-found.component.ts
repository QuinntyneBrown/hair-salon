import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./page-not-found.component.html"),
    styles: [require("./page-not-found.component.scss")],
    selector: "h-page-not-found",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent implements OnInit { 
    ngOnInit() {

    }
}
