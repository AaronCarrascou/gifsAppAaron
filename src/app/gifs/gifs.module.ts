import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResponsesComponent } from './responses/responses.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResponsesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
