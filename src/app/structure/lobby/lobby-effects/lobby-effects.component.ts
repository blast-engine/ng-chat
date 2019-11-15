import { Component, OnInit, OnDestroy } from '@angular/core'
import { ApiService } from 'app/services/api.service'
import { StateService } from 'app/services/state.service'

@Component({
  selector: 'app-lobby-effects',
  templateUrl: './lobby-effects.component.html',
  styleUrls: ['./lobby-effects.component.css']
})
export class LobbyEffectsComponent implements OnInit, OnDestroy {

  private subs: Array<{ unsubscribe: () => void }>

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.subs = [

      this.apiService.watch('room-basics', roomBasics => {
        const currentState = this.stateService.state()
        const newState = { ...currentState, roomBasics }
        this.stateService.commit(newState)
      }),

      this.apiService.watch('user-basics', userBasics => {
        const currentState = this.stateService.state()
        const newState = { ...currentState, userBasics }
        this.stateService.commit(newState)
      })

    ]
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe())
  }

}
