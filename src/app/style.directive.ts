import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  constructor(private elRef: ElementRef, private rend2: Renderer2) {  }
  @Input('appStyle') color: string;
  @Input() dStyles: {border?: string, borderRadius?: string, fontWeight?: string};

  @HostListener('click', ['$event']) onClick(event: Event) {
     console.log(event.target);
  }

  @HostBinding('style.backgroundColor') elemColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.elemColor = this.color;
    // this.rend2.setStyle(this.elRef.nativeElement, 'color', this.color);
    // this.rend2.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    // this.rend2.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    // this.rend2.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elemColor = null;
    // this.rend2.setStyle(this.elRef.nativeElement, 'color', null);
    // this.rend2.setStyle(this.elRef.nativeElement, 'border', null);
    // this.rend2.setStyle(this.elRef.nativeElement, 'borderRadius', null);
    // this.rend2.setStyle(this.elRef.nativeElement, 'fontWeight', null);
  }
}
