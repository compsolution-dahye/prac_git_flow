import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html'
})
export class PhotoPage {
    @ViewChild(Slides) slides: Slides;
    
      goToSlide() {
        this.slides.slideTo(2, 500);
      }
}
