import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.css']
})

export class HttpPracticeComponent implements OnInit {
  form:any;
  allProducts:Product[] = [];
  product: Product = new Product();
  editMode:boolean=false;
  currentId:any

  constructor(private productService:ProductService){
 
  }

  onGetProducts(){
    this.productService.getProducts().subscribe((products:any)=>{
      this.allProducts=products
    })
  }

  ngOnInit(){
    this.onGetProducts()
    this.form=new FormGroup({
      name:new FormControl(this.product.name,Validators.required),
      desc:new FormControl(this.product.desc,Validators.required),
      price:new FormControl(this.product.price,Validators.required)
    })
    this.productService.Refreshrequired.subscribe((res)=>{
      this.onGetProducts()
    })
    console.log(this.form)
  }

  validateAllFormFields(formGroup: FormGroup) 
  {
     console.log(Object.keys(formGroup.controls))
     Object.keys(formGroup.controls).forEach(each=>{
      let eachKey=(this.form.get(each))
      eachKey?.markAsTouched()
     })
    }
  
 
  onAddProduct(product:{name:string,desc:string,price:string}){
    this.validateAllFormFields(this.form)
    console.log(this.form.valid)
    if(this.editMode && this.form.valid){
      this.productService.updateProduct(this.currentId,product)
      this.form.reset()
      // this.onGetProducts()

    this.editMode=!this.editMode
    }
    else if(this.form.valid){
      this.productService.addProduct(product)
      // this.onGetProducts()
      this.form.reset()
    
  }
}

  onReset(){
    if(this.editMode){
      const obj :Product |undefined = this.allProducts.find((each:any)=>each.id===this.currentId)
      this.form.setValue({
        name:obj?.name,
      desc:obj?.desc,
      price:obj?.price
      })
      console.log("reset",obj)

    }
  else{
    this.form.reset()
  }
}


  onDeleteProduct(id:any,index:number){
    this.productService.deleteProduct(id)
    this.allProducts.splice(index,1)
    // this.ngOnInit()
  }

  onEdit(id:any){
    this.currentId=id
    this.editMode=true
   let presentValueObj :Product |undefined =this.allProducts.find((each:any)=>each.id===id)
    this.form.setValue({
      name:presentValueObj?.name,
      desc:presentValueObj?.desc,
      price:presentValueObj?.price
    })
  }

 

}
