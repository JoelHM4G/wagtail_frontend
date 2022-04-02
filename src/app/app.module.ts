import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/components/carousel/carousel/carousel.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CarouselComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		NgbModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
