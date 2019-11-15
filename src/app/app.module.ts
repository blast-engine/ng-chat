import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { ApiService } from 'app/services/api.service'
import { StateService } from 'app/services/state.service'
import { AppComponent } from 'app/structure/app.component'
import { appRoutes } from 'app/structure/app.routes'
import { RoomContainerComponent } from './structure/room/room-container/room-container.component';
import { LobbyContainerComponent } from './structure/lobby/lobby-container/lobby-container.component';
import { LobbyEffectsComponent } from './structure/lobby/lobby-effects/lobby-effects.component';
import { LobbyComponent } from './structure/lobby/lobby.component';
import { AuthEffectsComponent } from './structure/auth/auth-effects/auth-effects.component'
@NgModule({
  declarations: [
    AppComponent,
    RoomContainerComponent,
    LobbyContainerComponent,
    LobbyEffectsComponent,
    LobbyComponent,
    AuthEffectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    ApiService,
    StateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
