import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./login-form.component.html"),
    styles: [require("./login-form.component.scss")],
    selector: "h-login-form",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit { 
    ngOnInit() {

    }

    public isLoggedIn: boolean = true;
}
