import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'team-details',
  templateUrl: 'team-details.component.html',
  styleUrls: ['./team-details.component.css']
})

export class TeamDetailsComponent {

  @Input() team: Object

}
