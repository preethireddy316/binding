import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray } from '@angular/forms';
import { FirstnameValidator } from './firstname.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
title="reactive-forms"
reactiveForm=new FormGroup(
  {account:new FormGroup( {firstname:new FormControl('',
  [Validators.required,Validators.minLength(6),FirstnameValidator.cannotContainSpace,
    FirstnameValidator.shouldBeUnique]),

  lastname:new FormControl("",Validators.required)}),
   
    email:new FormControl(''),
    gender:new FormControl('male'),
    country:new FormControl('india'),
    hobbies:new FormControl(''),
    topics:new FormArray([])
  }
)
// FormGroup;
ngOnInit(){}

addTopic(topic:HTMLInputElement){
this.topics.push(new FormControl(topic.value))
topic.value=''
}

remove(topic:any){
let i = this.topics.controls.indexOf(topic)
this.topics.removeAt(i)
}

get topics(){
  return this.reactiveForm.get('topics') as FormArray
}

onSubmit()
{
  console.log(this.reactiveForm)
  // this.reactiveForm.setErrors({
  //   inValidLogin:true
  // })
}
  get firstname(){
  return this.reactiveForm?.get('account.firstname')
}



}
