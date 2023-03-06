import { Component,Inject } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  // @Inject(Number) public id?:number,
  constructor(@Inject(Number) public id?:number,
  @Inject(String) public firstName?:string,
   @Inject(String)  public lastName?: string,
   public DOB?:Date ,
  @Inject(String) public email?: string,
   @Inject(String) public status?:string,
   @Inject(Boolean) public isClicked?:boolean){
    // this.id=id;
    // this.firstName=firstName;
    // this.lastName=lastName;
    // this.DOB=DOB;
    // this.email=email;
    // this.status=status;
  }
}
