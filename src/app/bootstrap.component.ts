import { Component } from "@angular/core";

//  error  <input [value]="email" (keyup.enter)="email=$event.target.value; onKeyup1()"/>

 @Component({
    selector:'boot-courses',
    template:`
    <button>Save</button>
    <input [(ngModel)]='email' (keyup.enter)="onKeyup()"/>
    `
})

export class BootstrapComponent{
email="p@gmail.com"
title="list of courses"
imageUrl="https://cdn1.vectorstock.com/i/1000x1000/87/10/education-online-training-courses-image-vector-21718710.jpg"
colSpan=1

onKeyup(){
    return this.email
}



}
