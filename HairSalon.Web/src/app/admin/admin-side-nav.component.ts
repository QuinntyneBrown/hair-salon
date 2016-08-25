import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./admin-side-nav.component.html"),
    styles: [require("./admin-side-nav.component.scss")],
    selector: "h-admin-side-nav",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSideNavComponent implements OnInit { 
    ngOnInit() {

    }
}
