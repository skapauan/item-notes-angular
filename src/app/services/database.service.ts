import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { DBConstants } from 'src/strings/dbconstants'

@Injectable({
    providedIn: 'root',
})
export class DatabaseService {
    private db: IDBDatabase | undefined

    isOpen: BehaviorSubject<boolean>

    constructor() {
        this.isOpen = new BehaviorSubject<boolean>(false)
    }

    open(): void {
        if (this.isOpen.getValue()) return
        const openReq = window.indexedDB.open(
            DBConstants.Database,
            DBConstants.Version,
        )
        openReq.onsuccess = () => {
            this.db = openReq.result
            this.isOpen.next(true)
        }
        openReq.onerror = () => {
            this.isOpen.next(false)
        }
    }
}
