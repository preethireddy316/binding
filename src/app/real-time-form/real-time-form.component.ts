import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-real-time-form',
  templateUrl: './real-time-form.component.html',
  styleUrls: ['./real-time-form.component.css']
})
export class RealTimeFormComponent implements OnInit {

 form: any;
  firstName:any;
    lastName:any;
      userName:any;
        Email:any;
        Dob:any;
        Age:any;
        Comment:any
        Gender:any
        Mobile:any
        // hobbies:new FormControl("",[Validators.requiredTrue]),
        Country:any
        Remember:any
        isEnabled=true;
        
       

ngOnInit() {
  this.form=new FormGroup({
    firstname:new FormControl({value:"",disabled:false},[Validators.required,Validators.maxLength(6)]),
    lastname:new FormControl("",[Validators.required]),
      username:new FormControl("",[Validators.required]),
        email:new FormControl("",[Validators.required,Validators.email]),
        dob:new FormControl("",[Validators.required]),
        age:new FormControl("",[Validators.required,Validators.min(18), Validators.pattern("^[0-9]*$")]),
        comment:new FormControl("",[Validators.required,Validators.minLength(20)]),
        gender:new FormControl("",[Validators.required]),
        // hobbies:new FormControl("",[Validators.requiredTrue]),
        country:new FormControl("",[Validators.required]),
        remember:new FormControl("",[Validators.requiredTrue]),
        mobile:new FormControl("",[ Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10), Validators.maxLength(10)])
   })

   this.form.valueChanges.subscribe((value: { firstname: any; lastname: any; username: any; email: any; dob: any; age: any; comment: any; gender: any; country: any; remember: any; mobile: any; })=>{
    console.log(value)
    this.firstName=value.firstname
    this.lastName=value.lastname
      this.userName=value.username
        this.Email=value.email
        this.Dob=value.dob
        this.Age=value.age
        this.Comment=value.comment
        this.Gender=value.gender
        // hobbies:new FormControl("",[Validators.requiredTrue]),
        this.Country=value.country
        this.Remember=value.remember
        this.Mobile=value.mobile
   })
  console.log(this.form)
}

validateAllFormFields(formGroup: FormGroup) 
{
   console.log(Object.keys(formGroup.controls))
   Object.keys(formGroup.controls).forEach(each=>{
    let eachKey=(this.form.get(each))
    eachKey?.markAsTouched()
   })
  }

onSubmit(){
  console.log(this.form)
  this.validateAllFormFields(this.form)
  console.log(this.form.value,"values")
  // console.log(this.firstname.value)
}

disable(group: FormGroup): void{
  Object.keys(group.controls).forEach((key: string) => {
    // Get a reference to the control using the FormGroup.get() method
    const abstractControl = group.get(key);
     
      console.log('Key = ' + key + ' && Value = ' + abstractControl?.value);
    abstractControl?.disable()
  });
}

enable(group: FormGroup): void{
  Object.keys(group.controls).forEach((key: string) => {
    // Get a reference to the control using the FormGroup.get() method
    const abstractControl = group.get(key);
     
      console.log('Key = ' + key + ' && Value = ' + abstractControl?.value);
      abstractControl?.markAsUntouched()

      abstractControl?.enable()

  });
}

disableOrenable(){
  if(this.isEnabled){
  this.disable(this.form)
  }
  else{
  this.enable(this.form)
  }
  this.isEnabled=!this.isEnabled
}

singleEnableDisable(a:any,b:boolean){
  if(b===true){
    a.disable()
  }
  else{
    a.enable()
  }
}

logKeyValuePairs(group: FormGroup): void {
  // loop through each key in the FormGroup
  Object.keys(group.controls).forEach((key: string) => {
    // Get a reference to the control using the FormGroup.get() method
    const abstractControl = group.get(key);
     
      console.log('Key = ' + key + ' && Value = ' + abstractControl?.value);
    abstractControl?.markAsUntouched()
  });
}

onReset(){
  //  Object.keys(formGroup.controls).forEach(each=>{
  //   let eachKey=(this.form.get(each))
  //   eachKey?.markAsUntouched()}
//  console.log(this.form.json())
this.logKeyValuePairs(this.form)
  this.form.reset()

}



get firstname(){
  return this.form?.get('firstname')
}

get lastname(){
  return this.form?.get('lastname')
}get username(){
  return this.form?.get('username')
}get email(){
  return this.form?.get('email')
}
get dob(){
  return this.form?.get('dob')
}

get age(){
  return this.form?.get('age')
}
get mobile(){
  return this.form?.get('mobile')
}
get remember(){
  return this.form?.get('remember')
}
get country(){
  // return this.form?.['country']
  return this.form?.get('country')
}
// get hobbies(){
//   return this.form?.get('hobbies')
// }
get gender(){
  return this.form?.get('gender')
}


//  cannotContainSpace(control:AbstractControl) : ValidationErrors | null {
//   if((control.value as string).indexOf(" ")>=0){
//       return {cannotContainSpace:true}
//   }
//   return null

// }

//  shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>
// { return new Promise((resolve,_reject)=>{
//   setTimeout(()=>{
//       if(control.value=="preethi")
//            resolve({shouldBeUnique:true})
//       else
//            resolve(null)}
//       ,2000)
// })

}



