import { Routes, RouterModule } from '@angular/router';

import { WhatsNewComponent }     from './whats-new.component';

const routes: Routes = [
    { path: 'whatsnew', component: WhatsNewComponent }
];

export const routing = RouterModule.forChild(routes);

export const routedComponents = routes.filter(r => r.component != undefined).map(r => r.component)
