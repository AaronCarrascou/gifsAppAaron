import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('strBuscar') strBuscar!:ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ){

  }

  buscar(){
    const valor = this.strBuscar.nativeElement.value;

    if(valor!=''){
      this.gifsService.buscarGifs(valor.trim());
      this.strBuscar.nativeElement.value = '';
    }  

  }

}
