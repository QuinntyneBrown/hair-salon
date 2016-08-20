import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./home.component.html"),
    styles: [require("./home.component.scss")],
    selector: "h-home",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit { 
    ngOnInit() {

    }
}
