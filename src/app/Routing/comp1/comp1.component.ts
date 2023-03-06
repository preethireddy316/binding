import { Component } from '@angular/core';
import { DesignUtility } from 'src/app/service/designUtility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  result:any;
  constructor(private du:DesignUtility){
  
  }
  
  ngOnInit(): void {
    this.du.getComments().subscribe((res)=>{
      console.log(res)
      this.result=res
    })
  }
}
