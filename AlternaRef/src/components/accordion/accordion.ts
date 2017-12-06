import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 *
 * Author https://github.com/samarthagarwal/ionic-accordion-component
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;

  icon: string = "add";

  constructor(public renderer: Renderer) {

  }

    ngOnInit() {
        //console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 300ms, padding 500ms");

        // closed
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 4px 8px 4px");
    }

    toggleAccordion() {
        if (this.accordionExapanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");        
        } else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "100%");
        }

        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 4px 8px 4px");

        this.accordionExapanded = !this.accordionExapanded;
        this.icon = this.icon == "add" ? "remove" : "add";
    }
}
