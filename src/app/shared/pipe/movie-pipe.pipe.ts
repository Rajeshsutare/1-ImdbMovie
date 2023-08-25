import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../model/model';

@Pipe({
  name: 'moviePipe'
})
export class MoviePipePipe implements PipeTransform {

  transform(value: Imovie[], movieName: string):  Imovie[]{
    if(!value){
      return []
    }
    if(!movieName){
      return value
    }

    const movieData = value.filter(e=>{
      return e.title.toLowerCase().trim().includes(movieName.toLowerCase())
    })

    return movieData;
  }

}
