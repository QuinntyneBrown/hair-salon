import { CanActivate, ChangeDetectionStrategy, Component, ILoginRedirect } from "angular-rx-ui/src/components/core";
import { UserLoggedInAction } from "angular-rx-ui/src/components/login/login.actions";

@Component({
    template: require("./login-page.component.html"),
    styles: [require("./login-page.component.scss")],
    selector: "login-page",
    viewProviders: ["loginRedirect"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
    constructor(private loginRedirect: ILoginRedirect) { }
    storeOnChange = state => {
        if (state.lastTriggeredByActionType == "login.userLoggedInAction")
            this.loginRedirect.redirectPreLogin();
    }
}
