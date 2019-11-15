import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { StateService } from 'app/services/state.service';

@Component({
  selector: 'app-auth-effects',
  templateUrl: './auth-effects.component.html',
  styleUrls: ['./auth-effects.component.css']
})
export class AuthEffectsComponent implements OnInit {

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
        const newState = { ...currentState, currentUserId }
        this.stateService.commit(newState)
      } else {
        this.apiService.signIn()
      }
    })
  }

}
