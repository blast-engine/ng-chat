import { Injectable } from '@angular/core'

import { Emitter } from 'app/utils/emitter'

// export type IState = {
//     test: boolean;    
// }

@Injectable()
export class StateService {
    state$: Emitter<any> = new Emitter<any>({})

    constructor() {
        (window as any).stateService = this
    }

    commit(state) {
        this.state$.emit(state)
    }
}