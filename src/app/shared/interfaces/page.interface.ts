export interface Page {
	title: string;
	intro: string;
	body: string;
	carousel_images: CarouselImage[];
}

export interface CarouselImage {
	id: number;
	meta: Meta;
	carousel_image_t: CarouselImageT;
	carousel_title: string;
	carousel_subtitle: string;
	carousel_cta: string;
}

export interface CarouselImageT {
	url: string;
	width: number;
	height: number;
	alt: string;
}

export interface Meta {
	type: string;
}
