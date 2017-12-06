import { Component, OnInit, Renderer, Input } from '@angular/core';

@Component({
    selector: 'rate',
    templateUrl: 'rate.html'
})
export class RateComponent implements OnInit {

    @Input('data') data: any;

    constructor(public renderer: Renderer) {

    }

    ngOnInit() {

    }
}
