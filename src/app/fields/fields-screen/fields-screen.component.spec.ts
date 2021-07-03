import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FieldsScreenComponent } from './fields-screen.component'

describe('FieldsScreenComponent', () => {
    let component: FieldsScreenComponent
    let fixture: ComponentFixture<FieldsScreenComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FieldsScreenComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldsScreenComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
