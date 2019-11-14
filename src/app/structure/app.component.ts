import { Component } from '@angular/core';

import { ApiService } from 'app/services/api.service'
import { StateService } from 'app/services/state.service'

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  theString: string = ''

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.apiService.watch('theString', theString => {
      this.stateService.commit({ theString })
    })
    this.stateService.state$.subscribe(state => {
      this.theString = state.theString
    })
  }

  handleInputUpdate(event) {
    this.apiService.update('/', { theString: event.target.value })
  }
}
