import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent {
  courses: any;
  
  loadCourses(){
    this.courses=[{id:1,name:"course1"},{id:2,name:"course2"},{id:3,name:"course3"}]
  }

  onAdd(){
    this.courses.push({id:4,name:"course4"})
  }

  onRemove(course:any){
    let i = this.courses.indexOf(course)

    this.courses.splice(course,1)
  
  }

  trackCourse(index:any,course:any){
      return course?course.id:undefined
  }

}
