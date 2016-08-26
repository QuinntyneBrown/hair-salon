import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { IAboutViewModel } from "./about.view-model";
import { Subscription } from 'rxjs/Subscription';

@Component({
    template: require("./about.component.html"),
    styles: [require("./about.component.scss")],
    selector: "h-about",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent { 
    
    public heroImageUrl: string;
}
