import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-voter',
    template:  `
        <h4>{{name}}</h4>
        <button (click)="vote(true)" [disabled]="didVote">同意</button>
        <button (click)="vote(false)" [disabled]="didVote">取消</button>
   `
})

export class VoterComponent{
    @Input() name = ''
    @Output() voted = new EventEmitter<boolean>()
    didVote = false

    vote(agreed: boolean){
        this.voted.emit(agreed)
        this.didVote = true
    }
}