import { Component, OnInit, ViewChild, Renderer, Input } from '@angular/core';

@Component({
    selector: 'ion-card-content-collapsable',
    templateUrl: 'ion-card-content-collapsable.html'
})
export class IonCardContentCollapsableComponent implements OnInit {

    @Input('data') data: any;
    @ViewChild("cc") cardContent: any;

    isCollapsed: boolean = true;

    icon = "expand";

    constructor(public renderer: Renderer) {

    }

    ngOnInit() {
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 100ms");

        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "130px");
        //this.renderer.setElementStyle(this.cardContent.nativeElement, "overflow", "hidden");
    }

    toggleContent() {
        if (this.isCollapsed) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "100%");
            this.icon = "crop";
        } else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "130px");
            this.icon = "expand";
        }

        this.isCollapsed = !this.isCollapsed;
    }
}
