import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  courses=[1,2]
  viewMode="map"

post={
isFavorite:true
}

onFavChange(args:{value:boolean}){
  console.log("span changed",args)
}

}
