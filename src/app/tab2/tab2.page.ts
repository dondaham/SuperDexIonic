import {Component, OnInit} from '@angular/core';
import {DataSearchHero,Result, HeroService} from '../service/hero.service';
import {Router, Scroll} from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

  listHeros: Result[] = [];

  constructor(private heroService: HeroService,
              private route: Router) { }






  async onSearchHero(event: Event) {

    const value = (event.target as HTMLInputElement).value;
    console.log(value);

    try {
      const rep: DataSearchHero = await this.heroService.getheros(value);
      this.listHeros = rep.results;
      console.log(rep.results);

    } catch (error) {
      console.log('error');

    }
  }


  onClickHero(hero: Result) {
    console.log(hero.id);
    this.route.navigate(['hero/'+hero.id]);
  }

}
