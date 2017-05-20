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
var player_service_1 = require("./player.service");
var PlayerListComponent = (function () {
    function PlayerListComponent(playerService) {
        this.playerService = playerService;
    }
    PlayerListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.currentTeam = changes.listOfTeam.currentValue;
        var teamId = this.currentTeam._id;
        this.playerService.getPlayerListOfTeam(this.currentTeam._id)
            .subscribe(function (players) {
            _this.players = players;
        });
    };
    PlayerListComponent.prototype.onSelect = function (player) {
        this.selectedPlayer = player;
        var playerList = document.getElementById('player-list');
        playerList.classList.add("col-md-5");
        var playerDetails = document.getElementById('player-details');
        playerDetails.classList.add("col-md-7");
        playerDetails.style.display = "block";
    };
    return PlayerListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PlayerListComponent.prototype, "listOfTeam", void 0);
PlayerListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'player-list',
        templateUrl: 'player-list.component.html',
        styleUrls: ['./player-list.component.css']
    }),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayerListComponent);
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=player-list.component.js.map