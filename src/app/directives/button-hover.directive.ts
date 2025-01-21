import { transition } from '@angular/animations';
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[buttonHover]',
})
export class ButtonHoverDirective implements OnInit {

  buttonDefaultBGColor: string =
    'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  buttonHoverBGColor: string =
    'linear-gradient(90deg, rgb(254, 116, 146) 0%, rgb(253, 170, 181) 100%)';

  constructor(private element: ElementRef, private rend: Renderer2) {}

  @HostListener('mouseenter')
  mouseover(){
    this.changeElementBGColor(this.buttonHoverBGColor);
  }
  @HostListener('mouseleave')
  mouseleave(){
    this.changeElementBGColor(this.buttonDefaultBGColor);
  }

  ngOnInit(): void {
    this.changeElementBGColor(this.buttonDefaultBGColor);

  }

  changeElementBGColor(color: string){
    this.rend.setStyle(this.element.nativeElement, 'background', color);
    
  }
}

