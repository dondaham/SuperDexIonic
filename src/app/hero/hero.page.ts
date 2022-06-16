import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Result, HeroService} from '../service/hero.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {
  rep: Result = null;
  private value: '';

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              public navCtrl: NavController) {
  }

  async ngOnInit() {

    this.value = '';
    await this.getData();
  }


  async getData() {
    const value = this.route.snapshot.paramMap.get('id');
    this.rep = await this.heroService.getHeroDetails(value);
    console.log(`this.rep=${JSON.stringify(this.rep)}`);

    const stats = this.rep.powerstats;
    for (const sat in stats) {
      console.log(stats[sat]);
      if (stats[sat] == 'null') {
        stats[sat] = Math.floor(Math.random() * 100) + 20;
      }
    }


    console.log(`this.rep=${JSON.stringify(this.rep)}`);

  }


  async addFav() {
  }


}
