import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./whats-new.component.html"),
    styles: [require("./whats-new.component.scss")],
    selector: "c-whats-new",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsNewComponent implements OnInit { 
    ngOnInit() {

    }
}
