import { ProductsService } from './../../services/products/products.service';
import { Component,OnInit, ViewChild } from '@angular/core';
import { ProductInterface } from 'src/app/product.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  checkSearch: boolean = false ;
  products: ProductInterface[]=[
    {
      id: '1',
      title: 'Title #1',
      description: 'description #1',
      imageURL: 'https://www.kku.edu.sa/sites/default/files/news/main_image_home/admission1.jpg',
      available: true,
      quantity: 5,  },
  {
      id: '2',
      title: 'Title #2',
      description: 'description #2',
      imageURL: 'https://www.kku.edu.sa/sites/default/files/news/main_image/%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D9%8A%D8%A9%20%D8%B5%D9%8A%D9%81%D9%8A%D8%A9%20%281%29.png',
      available: true,
      quantity: 2,
  },
  {
      id: '3',
      title: 'Title #3',
      description: 'description #3',
      imageURL: 'https://www.kku.edu.sa/sites/default/files/news/main_image_home/admission1.jpg',
      available: false,
      quantity: 0,
  },
  ]

  constructor(public productsService: ProductsService,
              private router: Router) {}

  ngOnInit() {
    console.log(this.productsService.getAllProduct());
    this.getAllProduct();
  }
  getAllProduct(): ProductInterface[]{
    return this.productsService.getAllProduct();
  }

  search(){
    this.checkSearch=!this.checkSearch;

  }

}
