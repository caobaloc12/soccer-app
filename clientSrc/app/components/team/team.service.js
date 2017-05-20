"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        console.log('Team Service Initialized...');
    }
    TeamService.prototype.getTeamList = function () {
        return this.http.get('/api/team')
            .map(function (res) { return res.json(); });
    };
    TeamService.prototype.addTeam = function (newTeam) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/team', JSON.stringify(newTeam), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TeamService.prototype.deleteTeam = function (id) {
        return this.http.delete('/api/team/' + id)
            .map(function (res) { return res.json(); });
    };
    TeamService.prototype.updateTeam = function (team) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/team/' + team._id, JSON.stringify(team), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return TeamService;
}());
TeamService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map