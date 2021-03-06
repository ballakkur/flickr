import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _http: HttpClient) { }

  public getPhotos() {
    return this._http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=cakes&safe_search=1&api_key=b86825767cf114c702f4a3d8f3dfd4b1&nojsoncallback=1&format=json&per_page=100');
}

public saveDetail(data){
  console.log('save',data);
  localStorage.setItem('currentImage', JSON.stringify(data));
}
public getDetail(){
  return JSON.parse(localStorage.getItem('currentImage'));
}
public reviewSave(data){
   localStorage.setItem('review',JSON.stringify(data));
}
public getReview(){
  return JSON.parse(localStorage.getItem('review'));
}


}
