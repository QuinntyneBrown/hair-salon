import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent }     from './services.component';

const routes: Routes = [
    { path: 'services', component: ServicesComponent }
];

export const routing = RouterModule.forChild(routes);

export const routedComponents = routes.filter(r => r.component != undefined).map(r => r.component)
