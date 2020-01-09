import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructuredDirective]'
})
export class StructuredDirective {
  @Input('appStructuredDirective') set IsNot(isVisible: boolean) {
      if (!isVisible) {
         this.viewRef.createEmbeddedView(this.tempRef);
      } else {
        this.viewRef.clear();
      }
  }

  constructor(private tempRef: TemplateRef<any>,
              private viewRef: ViewContainerRef) { }

}
