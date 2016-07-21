import { AddOrUpdateAppAction } from "./content-aggregation/actions/app.actions";
import { appProperties } from "./app.constants";

export const allAppsReducer = (state, action) => {
    if (action instanceof AddOrUpdateAppAction) {
        state.app = state.app || { properties: [] };

        for (var i = 0; i < action.entity.properties.length; i++) {
            if (action.entity.properties[i].name === appProperties.homePageHeroImageUrl)
                state.app.homePageHeroImageUrl = action.entity.properties[i].value;

            if (action.entity.properties[i].name === appProperties.contactPageHeroImageUrl)
                state.app.contactPageHeroImageUrl = action.entity.properties[i].value;

            if (action.entity.properties[i].name === appProperties.servicesPageHeroImageUrl)
                state.app.servicesPageHeroImageUrl = action.entity.properties[i].value;

            if (action.entity.properties[i].name === appProperties.whatsNewPageHeroImageUrl)
                state.app.whatsNewPageHeroImageUrl = action.entity.properties[i].value;

            if (action.entity.properties[i].name === appProperties.galleriesPageHeroImageUrl)
                state.app.galleriesPageHeroImageUrl = action.entity.properties[i].value;

            if (action.entity.properties[i].name === appProperties.logo)
                state.app.logo = action.entity.properties[i].value;

            if (action.entity.properties[i].name === appProperties.whatsNew)
                state.app.whatsNew = action.entity.properties[i].htmlBody;

            if (action.entity.properties[i].name === appProperties.biography)
                state.app.biography = action.entity.properties[i].htmlBody;

            if (action.entity.properties[i].name === appProperties.contactInfomation)
                state.app.contactInfomation = action.entity.properties[i].htmlBody;

            if (action.entity.properties[i].name === appProperties.services)
                state.app.services = JSON.parse(action.entity.properties[i].value);

            if (action.entity.properties[i].name === appProperties.socialShareItems)
                state.app.socialShareItems = JSON.parse(action.entity.properties[i].value);

            if (action.entity.properties[i].name === appProperties.menuItems)
                state.app.menuItems = JSON.parse(action.entity.properties[i].value);
        }
    }
    return state;
}