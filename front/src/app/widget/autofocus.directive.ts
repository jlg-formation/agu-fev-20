import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  constructor(private elt: ElementRef) {
    console.log('autofocus directive');
  }

  ngOnInit(): void {
    this.elt.nativeElement.focus();
  }
}
