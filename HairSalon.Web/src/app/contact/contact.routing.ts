import { Routes, RouterModule } from '@angular/router';

import { ContactComponent }     from './contact.component';

const routes: Routes = [
    { path: 'contact', component: ContactComponent }
];

export const routing = RouterModule.forChild(routes);

export const routedComponents = routes.filter(r => r.component != undefined).map(r => r.component)
