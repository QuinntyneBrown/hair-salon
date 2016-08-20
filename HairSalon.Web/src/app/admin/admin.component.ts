import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./admin.component.html"),
    styles: [require("./admin.component.scss")],
    selector: "h-admin",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit { 
    ngOnInit() {

    }
}
