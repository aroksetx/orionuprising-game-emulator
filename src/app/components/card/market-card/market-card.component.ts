import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-card',
  templateUrl: './market-card.component.html',
  styleUrls: ['./market-card.component.scss']
})
export class MarketCardComponent implements OnInit {
  @Input() price = 5;
  name = 'Blokade';

  constructor() { }

  ngOnInit(): void {
  }

}
