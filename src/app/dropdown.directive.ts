import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') click() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.renderer.addClass(this.element.nativeElement, 'open');
    } else {
      this.isOpen = false;
      this.renderer.removeClass(this.element.nativeElement, 'open');
    }
  }

}
