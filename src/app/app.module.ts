import { Comp2Component } from './Routing/comp2/comp2.component';
import { CourseService } from './service/course.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { SummaryPipe } from './summary.pipe';
import { BootstrapComponent } from './bootstrap.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeCourseComponent } from './pipecourse.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { DirectiveComponent } from './directive/directive.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './person/person.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './Routing/home/home.component';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './Routing/notfound/notfound.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { RealTimeFormComponent } from './real-time-form/real-time-form.component';
import { HttpPracticeComponent } from './http-practice/http-practice.component';
import { NavComponent } from './nav/nav.component';
import { CourseComponent } from './Routing/course/course.component';
import { Courses1Component } from './Routing/courses/courses.component';
import { Comp1Component } from './Routing/comp1/comp1.component';
import { LoaderInterceptor } from './interceptor/loader-interceptor';
// import { LoaderComponent } from './Routing/loader/loader.component';
import { LoaderComponent } from './Routing/loader/loader.component';
import { DesignUtility } from './service/designUtility.service';
// pathMatch:'full'
const appRoute:Routes=[{path:"",component:HomeComponent},{
  path:'home',component:HomeComponent
},{
  path:'about',component:AboutComponent
},{
  path:'contact',component:ContactComponent
},{
  path:'courses',component:Courses1Component
},{
  path:'courses/course/:id',component:CourseComponent
},{
  path:'comp1',component:Comp1Component
},{
  path:'comp2',component:Comp2Component
},{path:'**',component:NotfoundComponent}]

@NgModule({
  declarations: [
    AppComponent,CoursesComponent,BootstrapComponent,
    PipeCourseComponent,SummaryPipe, FavoriteComponent,
     PanelComponent, DirectiveComponent, PersonsComponent,
      ContactFormComponent, HomeComponent, AboutComponent,
       ContactComponent,
       NotfoundComponent,
      //  ReactiveFormComponent,
      //  RealTimeFormComponent,
       HttpPracticeComponent,
       NavComponent,
      CourseComponent,Comp1Component,Comp2Component,
      LoaderComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoute),
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [CourseService,DesignUtility,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
