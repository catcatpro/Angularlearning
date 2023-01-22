import { Component } from "@angular/core";

@Component({
    selector: 'app-vote-user',
    template: `
        <h2>投票器</h2>
        <h3>同意: {{agreed}}, 反对：{{disagreed}}</h3>
        <app-voter *ngFor="let voter of votes"
             [name]="voter"
            (voted)="onVoted($event)">
          
        </app-voter>
    `
})

export class VoteTakerComponent{
    agreed =0
    disagreed = 0
    votes:string[] = ["Way Lau", "bombasto", "Magma"]
    
    onVoted(agreed: boolean){
        agreed ? this.agreed++:this.disagreed++
    }
}