import { Component, OnInit } from '@angular/core'
import { Strings } from 'src/strings/strings'

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    links = [
        { path: '', title: Strings.ScreenNameView },
        { path: 'fields', title: Strings.ScreenNameFields },
        { path: 'save', title: Strings.ScreenNameSave },
        { path: 'open', title: Strings.ScreenNameOpen },
        { path: 'settings', title: Strings.ScreenNameSettings },
    ]

    constructor() {
        return
    }

    ngOnInit(): void {
        return
    }
}
