import { CourseService } from './../../service/course.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
course:any;
courseId:any;

constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService){

}

ngOnInit(){
// this.courseId=this.activatedRoute.snapshot.params['id']
this.activatedRoute.paramMap.subscribe((param)=>{
  this.courseId=param.get('id')
})

this.course=this.courseService.courses.find((each:any)=>each.id==this.courseId)
console.log(this.course,)
}

}
