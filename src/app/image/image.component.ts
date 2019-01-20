import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  photos
  p: number = 1;
  reviewData
  snapId:number
  response
  columns:number=3;
  constructor(public imageservice:ImageService,public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.snapId = this.activatedRoute.snapshot.params.id
    if(this.snapId !=1){
      this.p = this.activatedRoute.snapshot.params.p;
     this.reviewData =  this.imageservice.getReview();
    }
    this.imageservice.getPhotos()
    .subscribe((apiResponse)=>{
      console.log(apiResponse);
      this.response = apiResponse;
      console.log(this.response);
      this.photos = this.response.photos.photo;
      console.log(this.photos);
      console.log(window.innerWidth);
    })
    if(window.innerWidth<550){
      this.columns = 1;
    }else if(window.innerWidth<900 && window.innerWidth>550 ){
      this.columns = 2;
    }
  }
  review(id:string){
    this.photos.forEach(element => {
      if(element.id == id){
        console.log(element)
        this.imageservice.saveDetail(element);
      }
    });
    console.log(this.p);
    this.router.navigate([`/view/${id}/${this.p}`]);
  }

}
