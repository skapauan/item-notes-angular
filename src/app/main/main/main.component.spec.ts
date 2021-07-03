import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { NavigationComponent } from '../navigation/navigation.component'
import { MainComponent } from './main.component'

describe('MainComponent', () => {
    let component: MainComponent
    let fixture: ComponentFixture<MainComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [MainComponent, NavigationComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
