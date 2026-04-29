import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTracker]'
})
export class TrackerDirective {
  // Punto 5: Inyección de ElementRef por dependencia
  constructor(private el: ElementRef) {}

  // Punto 5: Suscripción a eventos del DOM (click)
  @HostListener('click')
  onClick() {
    // Punto 6: Lectura de "tracking tags" del elemento del DOM
    const tag = this.el.nativeElement.getAttribute('tracking-tag');
    console.log('Actividad registrada en el tag:', tag);
  }
}
