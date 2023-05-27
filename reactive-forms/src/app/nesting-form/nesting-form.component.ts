import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder ,Validators} from '@angular/forms';
@Component({
  selector: 'app-nesting-form',
  templateUrl: './nesting-form.component.html',
  styleUrls: ['./nesting-form.component.css']
})
export class NestingFormComponent implements OnInit {
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      
  }

  // nestingForm = new FormGroup({
  //   firstName: new FormControl(""),
  //   lastName: new FormControl(""),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     street: new FormControl("")
  //   })
  // })

  nestingForm = this.fb.group({
    firstName:[''],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      street:['']
    })
  })
  onSumbit(){
    console.warn(this.nestingForm.value)
  }
  
  updateProfile(){
    this.nestingForm.patchValue({
      firstName: '老张',
      address: {
        street: '板田华为基地'
      }
    })
  }
}
