import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { HairStylistEditorComponent } from "./hair-stylist-editor.component";
import { HairStylistListComponent } from "./hair-stylist-list.component";
import { HairStylistComponent } from "./hair-stylist.component";
import { HairStylistsContainerComponent } from "./hair-stylists-container.component";
import { HairStylistActionCreator } from "./hair-stylist.action-creator";
import { HairStylistService } from "./hair-stylist.service";
import *  as reducers from "./hair-stylist.reducers";
import *  as actions from "./hair-stylist.actions";

const appHairStylistsModule = angular.module("app.hair-stylists", []);

bootstrap(appHairStylistsModule, {
    components: [HairStylistComponent, HairStylistEditorComponent, HairStylistsContainerComponent, HairStylistListComponent],
    providers: [HairStylistActionCreator, HairStylistService],
    reducers: reducers,
    actions: actions
});

export * from "./hairStylists.routes";
