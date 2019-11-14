import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ApiService } from 'app/services/api.service'
import { AppComponent } from 'app/structure/app.component'
import { appRoutes } from 'app/structure/app.routes'
import { RoomContainerComponent } from './structure/room/room-container/room-container.component'
@NgModule({
  declarations: [
    AppComponent,
    RoomContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    ApiService 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
