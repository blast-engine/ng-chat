import { Component } from '@angular/core'

import { ApiService } from 'app/services/api.service'
import { StateService } from 'app/services/state.service'

const updateCurrentUserId = (state, { uid }) => {
	return {
		...state,
		currentUserId: uid
	}
}

interface IUserBasic {
  name: string, 
  id: string
}

interface IViewModel {
  user: IUserBasic | null
}

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: IViewModel = {
    user: null
  }

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    // this.apiService.watch('theString', theString => {
    //   this.stateService.commit({ theString })
    // })
    this.stateService.state$.subscribe(state => {
      this.view = {
        ...this.view,
        user: state.currentUser
      }
    })
    
    // this.apiService.subscribeToAuth(user => {
    //   const currentState = this.stateService.state()
    //   const newState = updateCurrentUserId(currentState, {uid: user ? user.uid : null})
    //   this.stateService.commit(newState)
    // })
  }

  handleInputUpdate(event) {
    //this.apiService.update('/', { theString: event.target.value })
  }
}
