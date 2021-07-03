import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FieldsScreenComponent } from './fields/fields-screen/fields-screen.component'
import { IntroComponent } from './main/intro/intro.component'
import { LoadingComponent } from './main/loading/loading.component'
import { MainComponent } from './main/main/main.component'
import { NavigationComponent } from './main/navigation/navigation.component'
import { OpenScreenComponent } from './open/open-screen/open-screen.component'
import { SaveScreenComponent } from './save/save-screen/save-screen.component'
import { SettingsScreenComponent } from './settings/settings-screen/settings-screen.component'
import { ViewScreenComponent } from './view/view-screen/view-screen.component'

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NavigationComponent,
        IntroComponent,
        LoadingComponent,
        FieldsScreenComponent,
        OpenScreenComponent,
        SaveScreenComponent,
        SettingsScreenComponent,
        ViewScreenComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
