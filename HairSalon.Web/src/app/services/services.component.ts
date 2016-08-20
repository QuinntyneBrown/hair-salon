import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./services.component.html"),
    styles: [require("./services.component.scss")],
    selector: "h-services",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit { 
    ngOnInit() {

    }
}
