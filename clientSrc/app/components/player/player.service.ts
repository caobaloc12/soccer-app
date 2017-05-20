import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService{

    constructor(private http:Http){
        console.log('PlayerService Initialized...');
    }

    getPlayerListOfTeam(teamId){
        return this.http.get('/api/player/'+teamId)
            .map(res => res.json());
    }

}
