import { Component, OnInit } from '@angular/core'
import { Strings } from 'src/strings/strings'

export const navigationLinks = [
    { path: '', title: Strings.ScreenNameView },
    { path: 'fields', title: Strings.ScreenNameFields },
    { path: 'save', title: Strings.ScreenNameSave },
    { path: 'open', title: Strings.ScreenNameOpen },
    { path: 'settings', title: Strings.ScreenNameSettings },
]

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    links = navigationLinks

    constructor() {
        return
    }

    ngOnInit(): void {
        return
    }
}
