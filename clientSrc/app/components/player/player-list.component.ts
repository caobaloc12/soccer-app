import { Component, Input } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  moduleId: module.id,
  selector: 'player-list',
  templateUrl: 'player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent {

  @Input() listOfTeam: Object
  currentTeam: Object
  players: any[]
  selectedPlayer: Object

  constructor(private playerService: PlayerService){ }

  ngOnChanges(changes: any) {
    this.currentTeam = changes.listOfTeam.currentValue
    let teamId = this.currentTeam._id

    this.playerService.getPlayerListOfTeam(this.currentTeam._id)
    .subscribe(players => {
      this.players = players
    })
  }

  onSelect(player: Object){
    this.selectedPlayer = player
    let playerList = document.getElementById('player-list')
    playerList.classList.add("col-md-5")
    let playerDetails = document.getElementById('player-details')
    playerDetails.classList.add("col-md-7")
    playerDetails.style.display = "block"
  }

}
