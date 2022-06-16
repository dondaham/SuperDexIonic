import { Component, OnInit, ViewChild } from '@angular/core';
import {Result, HeroService} from '../service/hero.service';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { async } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  rep: Result = null;
  value = '';
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(private heroService: HeroService,private router: Router) {}



  ngOnInit(): void {
    this.getData();
  }





   async getData() {
     const randomHero: number = Math.floor(Math.random() * 731) + 1;
     this.value = randomHero.toString();
     this.rep = await this.heroService.getHeroDetails(this.value);
     if (this.rep.image.url == 'null') {
       this.getData();

     }
     console.log(`this.rep=${JSON.stringify(this.rep)}`);

   }



}
