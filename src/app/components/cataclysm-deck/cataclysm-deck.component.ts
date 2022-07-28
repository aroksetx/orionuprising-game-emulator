import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-cataclysm-deck',
    templateUrl: './cataclysm-deck.component.html',
    styleUrls: ['./cataclysm-deck.style.scss'],
})
export class CataclysmDeckComponent implements OnInit {

    constructor(
        private viewContainerRef: ViewContainerRef,
    ) {
    }

    ngOnInit() {
    }
}