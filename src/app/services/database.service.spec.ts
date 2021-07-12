import { TestBed } from '@angular/core/testing'

import { DatabaseService } from './database.service'

describe('DatabaseService', () => {
    let service: DatabaseService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(DatabaseService)
    })

    it('should be created with correct initial values', () => {
        expect(service).toBeTruthy()
        expect(service.isOpen.getValue()).toEqual(false)
    })

    it('should update isOpen if open succeeds', (done) => {
        // Spy to trigger success event for indexedDB.open()
        interface TempOpenReq extends EventTarget {
            result?: { onclose?: () => void }
        }
        const tempOpenReq: TempOpenReq = new EventTarget()
        tempOpenReq.result = {}
        const openReq = tempOpenReq as unknown as IDBOpenDBRequest
        spyOn(window.indexedDB, 'open').and.returnValue(openReq)
        // Spy subscriber to isOpen
        const subscriber = jasmine.createSpy()
        // Open database and subscribe to isOpen
        service.open()
        service.isOpen.subscribe(subscriber)
        setTimeout(() => {
            // Trigger success event for indexedDB.open()
            openReq.dispatchEvent(new Event('success'))
            if (typeof openReq.onsuccess === 'function') {
                openReq.onsuccess.call(openReq, new Event(''))
            }
            setTimeout(() => {
                // Check subscriber calls
                expect(subscriber.calls.count()).toEqual(2)
                expect(subscriber.calls.first().args).toEqual([false])
                expect(subscriber.calls.mostRecent().args).toEqual([true])
                done()
            }, 0)
        }, 0)
    }, 500)

    it('should update isOpen if open fails', (done) => {
        // Spy to trigger success event for indexedDB.open()
        const openReq = new EventTarget() as IDBOpenDBRequest
        spyOn(window.indexedDB, 'open').and.returnValue(openReq)
        // Spy subscriber to isOpen
        const subscriber = jasmine.createSpy()
        // Open database and subscribe to isOpen
        service.open()
        service.isOpen.subscribe(subscriber)
        setTimeout(() => {
            // Trigger error event for indexedDB.open()
            openReq.dispatchEvent(new Event('success'))
            if (typeof openReq.onerror === 'function') {
                openReq.onerror.call(openReq, new Event(''))
            }
            setTimeout(() => {
                // Check subscriber calls
                expect(subscriber.calls.count()).toEqual(2)
                expect(subscriber.calls.first().args).toEqual([false])
                expect(subscriber.calls.mostRecent().args).toEqual([false])
                done()
            }, 0)
        }, 0)
    }, 500)
})
