import { Component } from "@angular/core";


 @Component({
    selector:'pipe-course',
    template:`
    {{course.name}}<br/>
    {{course.students}}<br/>
    {{course.rating}}<br/>
    {{course.releaseDate}}<br/>
    {{course.price}}<br/>
    `
})

export class PipeCourseComponent{
course={
    name:"angular",
    students:3000,
    rating:3.45,
    releaseDate:new Date(2022,12,8),
    price:400.56
}

}
