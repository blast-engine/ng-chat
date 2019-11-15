import { Component, OnInit } from '@angular/core'
import { ApiService } from 'app/services/api.service'
import { StateService } from 'app/services/state.service'

@Component({
  selector: 'app-auth-effects',
  templateUrl: './auth-effects.component.html',
  styleUrls: ['./auth-effects.component.css']
})
export class AuthEffectsComponent implements OnInit {

  private userSub: { unsubscribe: () => void }

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.apiService.subscribeToAuth(authUser => {
      if (authUser) {
        const currentUserId = authUser.uid

        this.apiService.update(`user-basics/${currentUserId}`, { id: currentUserId })
  
        const currentState = this.stateService.state()
        const newState = { 
          ...currentState, 
          currentUserId,
          currentUser: null
        }
        this.stateService.commit(newState)

        if (this.userSub) this.userSub.unsubscribe()
        this.userSub = this.apiService.watch(`user-basics/${currentUserId}`, userBasic => {
          const currentState = this.stateService.state()
          const newState = { 
            ...currentState, 
            currentUser: userBasic 
          }
          this.stateService.commit(newState)
        })
      } else {
        this.apiService.signIn()
      }
    })
  }

}
