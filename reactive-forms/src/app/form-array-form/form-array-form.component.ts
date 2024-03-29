import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-form-array-form',
  templateUrl: './form-array-form.component.html',
  styleUrls: ['./form-array-form.component.css']
})
export class FormArrayFormComponent implements OnInit{

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      
  }

  formArrayForm = this.fb.group({
    aliases: this.fb.array([
      this.fb.control(''),
      this.fb.control('')
    ])
  })

  get aliases(){
    return this.formArrayForm.get("aliases") as FormArray
  }

  addAliases(){
    this.aliases.push(this.fb.control(''))
  }

  onSubmit(){
    console.warn(this.formArrayForm.value)
  }
}


