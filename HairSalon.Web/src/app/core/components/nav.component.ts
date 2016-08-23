import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    template: require("./nav.component.html"),
    styles: [require("./nav.component.scss")],
    directives:[ROUTER_DIRECTIVES],
    selector: "h-nav",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit { 
    ngOnInit() {

    }
}
