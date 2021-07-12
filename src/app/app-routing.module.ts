import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FieldsScreenComponent } from './fields/fields-screen/fields-screen.component'
import { OpenScreenComponent } from './open/open-screen/open-screen.component'
import { SaveScreenComponent } from './save/save-screen/save-screen.component'
import { SettingsScreenComponent } from './settings/settings-screen/settings-screen.component'
import { ViewScreenComponent } from './view/view-screen/view-screen.component'

const routes: Routes = [
    { path: 'view', component: ViewScreenComponent },
    { path: 'fields', component: FieldsScreenComponent },
    { path: 'save', component: SaveScreenComponent },
    { path: 'open', component: OpenScreenComponent },
    { path: 'settings', component: SettingsScreenComponent },
    { path: '**', redirectTo: '/view', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
