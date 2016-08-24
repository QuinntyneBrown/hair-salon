import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { IAboutViewModel } from "./about.view-model";
import { Subscription } from 'rxjs/Subscription';
import { UIService } from "../core/services/ui.service";

@Component({
    template: require("./about.component.html"),
    styles: [require("./about.component.scss")],
    selector: "h-about",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit { 
    constructor(private _uiService: UIService) { }

    ngOnInit() {
        this.getViewModel();
    }

    getViewModel(): Subscription {
        return this._uiService
            .getViewModel({ name: "about" })
            .subscribe(viewModel => {
                this.heroImageUrl = viewModel.heroImageUrl;
            });
    }

    public heroImageUrl: string;
}
