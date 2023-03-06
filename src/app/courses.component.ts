import { Component } from "@angular/core";

//[class]="isFavSelected?'glyphicon-star':'glyphicon-star-empty'"
 @Component({
    selector:'app-courses',
    template:`
    <p>{{text}}</p>
    <h1>{{title}}</h1>
    <h1 [textContent]="title"></h1>
    <img src="{{imageUrl}}"/>
    <img [src]="imageUrl"/>
    <table>
    <tr>
    <td [attr.colspan]="colSpan"></td>
    </tr>
    <table>

    <span class="glyphicon glyphicon-film"></span>
    `
})
//isFavSelected=true
export class CoursesComponent{

text="fghj jkhklm jkjk jhkl jfthj fjkk jkl list of courses list of courses list of courses"
title="list of courses"
imageUrl="https://cdn1.vectorstock.com/i/1000x1000/87/10/education-online-training-courses-image-vector-21718710.jpg"
colSpan=1
}
