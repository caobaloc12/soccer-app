import { Component } from '@angular/core'
import { TeamService } from './team.service'

@Component({
  moduleId: module.id,
  selector: 'team-list',
  templateUrl: 'team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

export class TeamListComponent {

  teams: any[]
  selectedTeam: Object

  constructor(private teamService: TeamService){
    this.teamService.getTeamList()
      .subscribe(teams => {
        this.teams = teams
      })
  }

  onSelect(team: Object){
    this.selectedTeam = team
  }

}
