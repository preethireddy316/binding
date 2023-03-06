import { PersonComponent } from './../person/person.component';
import { Component,  OnInit } from '@angular/core';
import { PersonInfo } from './person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements  OnInit {
  personInfo: PersonInfo[] = [];
  // persons: PersonComponent[] = [new PersonComponent(0, "Preethi", "Peesu", new Date(1990, 12, 27), "peechupreethi@gmail.com", "active", false),
  // new PersonComponent(1, "sushmita", "krosuri", new Date(1995, 6, 8), "a@gmail.com", "Inactive", false),
  // new PersonComponent(2, "bhargav", "ddadafg", new Date(1997, 5, 8), "b@gmail.com", "active", false)]

  // {{console.log(this.persons)}}

  ngOnInit() {
    debugger;
    this.addPerson(0,"test 1", "test 11", "test@test.com", new Date(), 'active',false);
    this.addPerson(1,"test 1", "test 11", "test@test.com", new Date(), 'active',false);
    this.addPerson(2,"test 1", "test 11", "test@test.com", new Date(), 'active',false);
    this.addPerson(3,"test 1", "test 11", "test@test.com", new Date(), 'active',false);
    this.addPerson(4,"test 1", "test 11", "test@test.com", new Date(), 'active',false);
    this.addPerson(5,"test 1", "test 11", "test@test.com", new Date(), 'active',false);
    this.addPerson(6,"test 1", "test 11", "test@test.com", new Date(), 'active',false);
  }

  addPerson(id:number,firstName: string, lastName: string, email: string, dob: Date, 
    status: string, isClicked:boolean) {
    let person: PersonInfo = new PersonInfo();
    person.id=id
    person.firstName = firstName;
    person.lastName = lastName;
    person.email = email;
    person.dob = dob;
    person.status = status;
    person.isClicked=isClicked;
    this.personInfo.push(person);
  }

  onEdit(id?: any) {
    this.personInfo[id].isClicked = !this.personInfo[id].isClicked
    console.log(this.personInfo)
  }
}

