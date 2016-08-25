import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./schedule.component.html"),
    styles: [require("./schedule.component.scss")],
    selector: "h-schedule",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit { 
    ngOnInit() {

    }
}
