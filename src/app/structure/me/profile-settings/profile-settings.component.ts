import { Component, OnInit } from '@angular/core'
import { ApiService } from 'app/services/api.service'
import { StateService } from 'app/services/state.service'

interface IUserBasic {
  name: string
  id: string
}

interface IViewModel {
  currentUser: IUserBasic | null
}

interface ITempState {
  nameInputText: string
}

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  view: IViewModel = {
    currentUser: null
  }

  temp: ITempState = {
    nameInputText: ''
  }

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    const { unsubscribe } = this.stateService.state$
      .subscribe(state => { 
        if (state.currentUser) unsubscribe()
        this.view = { 
          ...this.view,
          currentUser: state.currentUser || null
        }
      })
  }

  handleNameUpdateClick() {
    const currentUserId = this.stateService.state().currentUserId
    if (!currentUserId) return

    this.apiService.update(`user-basics/${currentUserId}`, { name: this.temp.nameInputText })
  }
}
