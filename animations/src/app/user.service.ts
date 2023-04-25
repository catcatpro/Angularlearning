export class User{
    constructor(public name: string, public state:string = 'inactive'){}

    toggleState(){
        this.state = this.state == 'active'? 'inactive':'active'
    }
}