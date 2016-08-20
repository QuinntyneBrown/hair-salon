import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./contact.component.html"),
    styles: [require("./contact.component.scss")],
    selector: "h-contact",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit { 
    ngOnInit() {

    }
}
