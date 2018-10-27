import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe((dish) => this.dish =  dish,
    errmess => this.dishErrMess = errmess);
    this.promotionservice.getFeaturedPromotion()
    .subscribe((promotion) => this.promotion = promotion);
    console.log(this.promotion);
    this.leaderService.getFeaturedLeader()
    .subscribe((leader) => this.leader = leader);
  }

}
