import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { NavigationComponent, navigationLinks } from './navigation.component'

describe('navigationLinks', () => {
    it('should contain unique paths', () => {
        const paths = navigationLinks.map(({ path }) => path)
        for (let i = paths.length - 1; i >= 0; i--) {
            expect(paths.indexOf(paths[i])).toEqual(i)
        }
    })

    it('should contain unique titles', () => {
        const titles = navigationLinks.map(({ title }) => title)
        for (let i = titles.length - 1; i >= 0; i--) {
            expect(titles.indexOf(titles[i])).toEqual(i)
        }
    })
})

describe('NavigationComponent', () => {
    let component: NavigationComponent
    let fixture: ComponentFixture<NavigationComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NavigationComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should render the navigation links', () => {
        const compiled = fixture.nativeElement
        const elements = compiled.querySelectorAll('nav ul li a')
        for (let i = navigationLinks.length - 1; i >= 0; i--) {
            const a = elements.item(i)
            const n = navigationLinks[i]
            expect(a).toBeTruthy()
            expect(a.getAttribute('href')).toContain(n.path)
            expect(a.textContent).toContain(n.title)
        }
    })
})
