import { Injectable } from '@angular/core'

export type IState = {
    test: boolean;    
}

@Injectable()
export class StateService {
    _state: IState

    constructor() {
        (window as any).stateService = this 
    }
}