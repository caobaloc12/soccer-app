import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService{
    constructor(private http:Http){
        console.log('Team Service Initialized...');
    }

    getTeamList(){
        return this.http.get('/api/team')
            .map(res => res.json());
    }

    addTeam(newTeam){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/team', JSON.stringify(newTeam), {headers: headers})
            .map(res => res.json());
    }

    deleteTeam(id){
        return this.http.delete('/api/team/'+id)
            .map(res => res.json());
    }

    updateTeam(team){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/team/'+team._id, JSON.stringify(team), {headers: headers})
            .map(res => res.json());
    }
}
