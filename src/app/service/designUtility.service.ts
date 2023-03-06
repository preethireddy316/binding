import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DesignUtility{
loader =new BehaviorSubject<Boolean>(false)
 constructor(private http:HttpClient){
 }  
 
 getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
 }

 getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
 }
}