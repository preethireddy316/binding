import { Component, OnInit } from '@angular/core';
import { DesignUtility } from 'src/app/service/designUtility.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
loader:any;
constructor(private du:DesignUtility){
}

ngOnInit(){
  this.du.loader.subscribe((res)=>{
    console.log(res)
    this.loader=res
  })
  
}

}
