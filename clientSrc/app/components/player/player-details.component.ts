import { Component, Input }       from '@angular/core';

import {PlayerService} from './player.service';

@Component({
  moduleId: module.id,
  selector: 'player-details',
  templateUrl: 'player-details.component.html',
  styleUrls: ['./player-details.component.css']
})

export class PlayerDetailsComponent {

  @Input() player: Object

  constructor(
    private playerService: PlayerService
  )

  closeDetails():void{
    let playerList = document.getElementById('player-list')
    playerList.classList.remove("col-md-5")
    let playerDetails = document.getElementById('player-details')
    playerDetails.classList.remove("col-md-7")
    playerDetails.style.display = "none"
  }
}
