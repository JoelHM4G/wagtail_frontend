import { Component,Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: [
		'./carousel.component.scss'
	]
})
export class CarouselComponent implements OnInit {
	@Input() images!:[1,2,3];
	// images = [
	// 	944,
	// 	1011,
	// 	984
	// ].map((n) => `https://picsum.photos/id/${n}/2000/500`);

	constructor() {}

	ngOnInit(): void {
		console.log(this.images)

	}
}
