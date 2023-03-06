import { Component,EventEmitter,Input,OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
})

export class FavoriteComponent implements OnInit {
  
  @Input() isFavorite?:boolean;
  @Output() change =new EventEmitter()
  
  onClick(){
    this.isFavorite=!this.isFavorite
    this.change.emit(this.isFavorite)
  }

  ngOnInit() {
    
  }
}
