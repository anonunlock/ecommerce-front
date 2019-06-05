import {Component, OnInit, ViewChild} from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-box-categories',
  templateUrl: './box-categories.component.html',
  styleUrls: ['./box-categories.component.css']
})
export class BoxCategoriesComponent implements OnInit {


  @ViewChild('owlCategories') owlElement: OwlCarousel;
  public data: any;
  public optionsOws: any;

  constructor() {
  }

  ngOnInit() {
    this.optionsOws = {items: 6, dots: false, navigation: true, autoplay: false};
    this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

}
