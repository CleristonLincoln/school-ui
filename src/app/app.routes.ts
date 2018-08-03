import { SuppliesComponent } from './supply/supplies/supplies.component';
import { SuppliesFormComponent } from './supply/supplies/supplies-form/supplies-form.component';
import { UnityFormComponent } from './supply/unity/unity-form/unity-form.component';
import { ClassificationComponent } from './supply/classification/classification.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '../../node_modules/@angular/core';
import { SuppliesListComponent } from './supply/supplies/supplies-list/supplies-list.component';
import { SearchComponent } from './supply/supplies/supplies-list/search/search.component';



export const routes: Routes = [
    {path: 'classification', component: ClassificationComponent},
    {path: 'unity', component: UnityFormComponent},
    {path: 'supplies', component: SuppliesComponent},
    {path: 'supplies/form', component: SuppliesFormComponent},
    {path: 'supplies/list', component: SuppliesListComponent},


    // apagar depois
    {path: 'search', component: SearchComponent}

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
