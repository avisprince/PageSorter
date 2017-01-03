/// <reference path="../node_modules/@types/jquery/index.d.ts"/>
/// <reference path="../node_modules/@types/slick-carousel/index.d.ts"/>

import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.less']
})
export class AppComponent {
    private listIndex: number; 

	constructor() {
    	$(document).ready(function(){
      		$("#list").slick({
				arrows: true,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: true,
				focusOnSelect: true,
				asNavFor: '#currentPage'
			});

			$("#currentPage").slick({
				arrows: false,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '#list'
			});
		});

		this.listIndex = 0;
  	}
	
	bucketClick() {
		// var slider = $("#list");
		// var currentSlideIndex = slider.slick("getCurrentSlide");

		// window.alert(slider.slick("getSlick").$slides.get(0));
		// window.alert($("#currentPage").get(0));
	}
}
