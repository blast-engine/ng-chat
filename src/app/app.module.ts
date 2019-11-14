import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ApiService } from 'app/services/api.service'
import { AppComponent } from 'app/structure/app.component'
import { RoomComponent } from 'app/structure/room/room.component'
import { appRoutes } from 'app/structure/app.routes';
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent
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
