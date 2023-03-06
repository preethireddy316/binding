import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
@ViewChild('myform') form:any ;
// 'NgForm'
firstname?:string;
defaultcountry="India";
defaultgender="Female"

gender=[{id:'1',value:"Male"},{id:2,value:"Female"}]

onSubmit(){
  console.log(this.form)
}

setDefaultValues(){
// this.form.value.personDetail.firstName='john'
// this.form.value.personDetail.email="john@ff.com"
// this.form.value.personDetail.comment="hey how are you"

// this.form.setValue({
//   personDetail:{firstName:"john",
// email:"john@ff.com",
// comment:"hey how are you"},
// country:this.defaultcountry,
// gender:this.defaultgender,
// hobbies:""
// })

this.form.form.patchValue({
personDetail:{firstName:"john",
email:"john@ff.com",
comment:"hey how are you"},
country:this.defaultcountry,
gender:this.defaultgender,
hobbies:""
})

}

}
