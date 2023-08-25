import { Component } from '@angular/core';
import { Imovie } from './shared/model/model';
import { movie } from './shared/const/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '1-ImdbMovie';

  public movieArray:Array<Imovie> = movie; 

  public searchMovie!:string;

}
