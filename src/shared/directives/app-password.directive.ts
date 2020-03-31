import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAppPassword]'
})
export class AppPasswordDirective implements OnInit, OnDestroy {

  private shown = false;
  private span: HTMLElement;
  private enter: any;

  constructor(public el: ElementRef) {
  }


  public toggle(){
    this.shown = !this.shown;
    if (this.shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      this.span.innerHTML = '<i class="material-icons">visibility</i>';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      this.span.innerHTML = '<i class="material-icons">visibility_off</i>';
    }
  }

  ngOnInit() {
    this.setup();
  }

  ngOnDestroy() {
    this.span.removeEventListener('click', this.enter);
  }

  setup() {
    const _this = this;
    const parent = this.el.nativeElement.parentNode;
    if (parent !== null) {
      this.span = document.createElement('a');
      this.span.className = 'a-show-password';
      this.span.innerHTML = '<i class="material-icons">visibility_off</i>';
      this.enter = (event) => {
        _this.toggle();
      };
      this.span.addEventListener('click', this.enter);
      if (this.el.nativeElement.nextSibling) {
        parent.insertBefore(this.span, this.el.nativeElement.nextSibling);
      } else {
        parent.appendChild(this.span);
      }
    }
  }

}
