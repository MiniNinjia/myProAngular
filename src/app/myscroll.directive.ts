import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({selector: '[appMyscroll]'})
export class MyscrollDirective {
  top: any;

  constructor(private el: ElementRef) {
    const that = this;
    window.onscroll = function () {
      const sTop = document.body.scrollTop;
      if (sTop - that.top <= 0) {
        el.nativeElement.style.top = '0px';
      } else {
        el.nativeElement.style.top = (sTop - that.top) + 'px';
      }
    };
  }

  @Input() set appMyscroll(top: any) {
    this.top = top;
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  //
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }
  //
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
