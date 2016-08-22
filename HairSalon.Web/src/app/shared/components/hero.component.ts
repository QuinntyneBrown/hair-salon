import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./hero.component.html"),
    styles: [require("./hero.component.scss")],
    selector: "h-hero",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit { 
    ngOnInit() {

    }
}
