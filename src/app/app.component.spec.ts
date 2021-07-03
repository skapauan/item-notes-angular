import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Strings } from 'src/strings/strings'

import { AppComponent } from './app.component'
import { MainComponent } from './main/main/main.component'
import { NavigationComponent } from './main/navigation/navigation.component'

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent, MainComponent, NavigationComponent],
        }).compileComponents()
    })

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })

    it(`should have as title 'item-notes-angular'`, () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app.title).toEqual('item-notes-angular')
    })

    it('should render navigation', () => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(
            compiled.querySelector('nav ul li:first-child').textContent,
        ).toContain(Strings.ScreenNameView)
    })
})
