import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { IntroComponent } from './main/intro/intro.component'
import { LoadingComponent } from './main/loading/loading.component'
import { MainComponent } from './main/main/main.component'
import { NavigationComponent } from './main/navigation/navigation.component'

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
