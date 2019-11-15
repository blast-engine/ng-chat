import { Routes } from '@angular/router'

import { RoomContainerComponent } from 'app/structure/room/room-container/room-container.component'
import { LobbyComponent } from 'app/structure/lobby/lobby.component'

export const appRoutes: Routes = [
    { path: 'room', component: RoomContainerComponent },
    { path: 'lobby', component: LobbyComponent },
    { path: '', pathMatch: 'full', redirectTo: '/lobby' }
]