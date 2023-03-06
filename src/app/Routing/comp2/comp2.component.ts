import { Component, OnInit } from '@angular/core';
import { DesignUtility } from 'src/app/service/designUtility.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
result:any;
constructor(private du:DesignUtility){

}

ngOnInit(): void {
  this.du.getPosts().subscribe((res)=>{
    console.log(res)
    this.result=res
  })
}

}
