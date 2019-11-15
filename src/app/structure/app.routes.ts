import { Routes } from '@angular/router'

import { RoomContainerComponent } from 'app/structure/room/room-container/room-container.component'
import { LobbyContainerComponent } from 'app/structure/lobby/lobby-container/lobby-container.component'

export const appRoutes: Routes = [
    { path: 'room', component: RoomContainerComponent },
    { path: 'lobby', component: LobbyContainerComponent },
    { path: '', pathMatch: 'full', redirectTo: '/lobby' }
]