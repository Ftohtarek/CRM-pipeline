import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[slideOnDrag]'
})
export class SlideOnDragDirective implements AfterViewInit {
  draggableArea = ['statge', 'section', 'heading', "summary", 'h2']
  Ready: boolean = false
  constructor(private el: ElementRef<HTMLElement>) { }
  ngAfterViewInit(): void {


  }
  private canSlide(el: HTMLElement) {
    let indicator = false
    this.draggableArea.forEach(areaName =>
      el.className.includes(areaName) || el.tagName.match(areaName) ? indicator = true : false
    )
    return indicator
  }

  @HostListener('click', ['$event']) onclick(event: MouseEvent) {
  }
  @HostListener('mousedown', ['$event']) touchStart(event: MouseEvent) {

    this.Ready = this.el.nativeElement.scrollWidth == this.el.nativeElement.clientWidth
      || !this.canSlide(<HTMLElement>event.target) ? false : true
  }
  @HostListener('mouseup', ['$event']) touchEnd(event: MouseEvent) {
    this.Ready = false
    this.el.nativeElement.classList.remove('crm-slideOnDrag')

  }
  @HostListener('mousemove', ['$event']) moveStart(event: MouseEvent) {
    if (this.Ready) {
      this.el.nativeElement.classList.add('crm-slideOnDrag')
      this.el.nativeElement.scrollLeft -= event.movementX
    }
  }
}
