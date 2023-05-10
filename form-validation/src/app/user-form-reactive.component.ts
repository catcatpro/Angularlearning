import { Component , OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { forbiddenNameValidator } from "./shared/forbidden-name.directive";
import { identityRevealedValidator } from "./shared/identity-revealed.directive";

@Component({
    selector: 'app-user-form-reactive',
    templateUrl: './app-user-form-reactive.component.html',
    styleUrls: ['./app-user-form-reactive.component.css'],
})
export class UserFormReactive implements OnInit{
    jobs = ['工程师', '医生','老师']
    user = {
        name: '小张',
        age: 25,
        job: this.jobs[0]
    }
    
    userForm:FormGroup | any

    ngOnInit(): void {
        // this.userForm = new FormGroup({
        //     'name': new FormControl(this.user.name,[
        //         Validators.required,
        //         Validators.minLength(2),
        //         forbiddenNameValidator(/老张/i)
        //     ]),
        //     'age': new FormControl(this.user.age),
        //     'job': new FormControl(this.user.job, Validators.required)
        // })
        this.userForm = new FormGroup({
            'name': new FormControl(),
            'age': new FormControl(),
            'job': new FormControl()
        }, {validators: identityRevealedValidator})
    }

    get name(){
        return this.userForm?.get("name")
    }

    get job(){
        return this.userForm?.get("job")
    }
}