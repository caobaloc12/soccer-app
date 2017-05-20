import { Component } from '@angular/core'
import { TeamService } from './components/team/team.service'
import { PlayerService } from './components/player/player.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TeamService, PlayerService]
})

export class AppComponent { }
