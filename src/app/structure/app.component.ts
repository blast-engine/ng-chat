import { Component } from '@angular/core';

import { ApiService } from 'app/services/api.service'

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-chat';

  constructor(private apiService: ApiService) {
    
  }
}
