import { Component, OnInit, Renderer, Input } from '@angular/core';

@Component({
    selector: 'document',
    templateUrl: 'document.html'
})
export class DocumentComponent implements OnInit {

    @Input('data') data: any;

    constructor(public renderer: Renderer) {

    }

    ngOnInit() {

    }
}