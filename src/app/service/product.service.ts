// import { Product } from './../http-practice/product.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({providedIn:"root"})
export class ProductService {
  private _refreshrequired=new Subject<void>();

    constructor(private http:HttpClient){
    }

    get Refreshrequired(){
      return this._refreshrequired
    }

    addProduct(product:{name:string,desc:string,price:string}){
        this.http.post('https://angularproject-d03f8-default-rtdb.firebaseio.com/products.json',product)
        .subscribe()
    }

    deleteProduct(id:string){
        this.http.delete('https://angularproject-d03f8-default-rtdb.firebaseio.com/products/'+id+'.json')
    .subscribe();
    }

    updateProduct(id:string,product:any){
        this.http.put('https://angularproject-d03f8-default-rtdb.firebaseio.com/products/'+id+'.json',product)
      .subscribe()
    }

    getProducts(){
        return(
        this.http.get('https://angularproject-d03f8-default-rtdb.firebaseio.com/products.json')
    .pipe(map(
      (res:any)=>{
      const products:any=[]
      for (let key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key],id:key})
        }
      }
      this.Refreshrequired.next();
      return products
    })))
    }




}