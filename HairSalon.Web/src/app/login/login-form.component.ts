import {
    Component,
    ChangeDetectionStrategy,
    Input,
    OnInit,
    EventEmitter,
    Output
} from "@angular/core";

import {
    FormGroup,
    FormControl
} from "@angular/forms";

@Component({
    template: require("./login-form.component.html"),
    styles: [require("./login-form.component.scss")],
    selector: "h-login-form",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit { 
    ngOnInit() { }

    @Output() loginFormSubmitted = new EventEmitter();

    public isLoggedIn: boolean = true;

    public form = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

    public onSubmit = () => {
        this.loginFormSubmitted.emit({
            value: this.form.value
        });
    }
}
