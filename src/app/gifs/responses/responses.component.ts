import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(
    private gifsService:GifsService
  ){

  }
}
