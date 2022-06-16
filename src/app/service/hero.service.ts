import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


export class Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export class Biography {
  fullname: string;
  alteregos: string;
  aliases: string[];
  placebirth: string;
  firstappearance: string;
  publisher: string;
  alignment: string;
}

export class Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyecolor: string;
  haircolor: string;
}

export class Work {
  occupation: string;
  base: string;
}

export class Connections {
  groupaffiliation: string;
  relatives: string;
}

export class Image {
  url: string;
}

export class Result {
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}

export class DataSearchHero {
  response: string;
  resultsfor: string;
  results: Result[];
}


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  TAG = 'HeroService';
  route: any;

  constructor(private http: HttpClient) {

  }

  getheros(hero: string): Promise<DataSearchHero> {
    console.log(`${this.TAG} getAuthors ${hero}`);
    const url = `https://www.superheroapi.com/api.php/1966327046904962/search/${encodeURI(hero)}`;
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        const json: DataSearchHero = data as DataSearchHero;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

  getHeroDetails(id: string): Promise<Result> {
    console.log(`${this.TAG} getAuthors ${id}`);
    const url = `https://www.superheroapi.com/api.php/1966327046904962/${id}`;
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        const json: Result = data as Result;
        resolve(json);
      }, err => {
        console.log(JSON.stringify(err));
      });
    });
  }

}
