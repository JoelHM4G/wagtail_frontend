import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
// import { ProductComponent } from './product/page.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
	declarations: [
		PagesComponent
	],
	imports: [
		CommonModule,
		PagesRoutingModule,
		MaterialModule
	]
})
export class PagesModule {}
