import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from 'app/services/state.service';
import { ApiService } from 'app/services/api.service';

const guid = () => Date.now() + ''

interface IUserMeta {
  name: string
  id: string
}

interface IRoomMeta {
  creator: IUserMeta
  name: string
}

interface IViewModel {
  ready: boolean
  rooms: Array<IRoomMeta>
}

interface ITempState {
  inputText: string
}

@Component({
  selector: 'app-lobby-container',
  templateUrl: './lobby-container.component.html',
  styleUrls: ['./lobby-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyContainerComponent {
  
  view: IViewModel = {
    ready: false,
    rooms: null
  }

  temp: ITempState = {
    inputText: ''
  }
  
  constructor(
    private stateService: StateService,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.stateService.state$.subscribe(state => {

      if (!state.roomBasics) {
        this.view = { ...this.view, rooms: null, ready: false }  
        return
      }
        
      if (!state.userBasics) {
        this.view = { ...this.view, rooms: null, ready: false }  
        return
      } 
        
      const rooms = (Object.values(state.roomBasics) as any)
        .filter(room => state.userBasics[room.creatorId])
        .map(room => {
          const creatorBasic = state.userBasics[room.creatorId]
          return {
            creator: {
              id: creatorBasic.id,
              name: creatorBasic.name
            },
            name: room.name
          }
        })

      this.view = {
        ...this.view,
        ready: true,
        rooms
      }
      
      this.changeDetectorRef.detectChanges()
    })
  }

  handleCreateButton() {
    const creatorId = this.stateService.state().currentUserId
    if (!creatorId) return

    const room = { 
      name: this.temp.inputText,
      creatorId,
      id: guid()
    }
    this.apiService.update(`room-basics/${room.id}`, room)
    this.temp.inputText = ''
  }

}
