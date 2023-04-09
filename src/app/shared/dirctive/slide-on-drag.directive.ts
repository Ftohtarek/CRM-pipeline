import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[slideOnDrag]'
})
export class SlideOnDragDirective {

  Ready: boolean = false
  private startX = 0

  dragElement!: HTMLElement | null
  constructor(private el: ElementRef<HTMLElement>) {
    document.body.addEventListener('touchmove', (e: TouchEvent) => {
      if (this.dragElement) {
        let distance = (e.changedTouches[0].clientX - this.startX) / 20
        this.el.nativeElement.scrollLeft += distance
      }
    })
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  touchStart(e: TouchEvent) {
    if (e instanceof TouchEvent) this.startX = e.changedTouches[0].clientX
    this.dragElement = (<HTMLElement>e.target).closest('.host')
    this.Ready = this.el.nativeElement.scrollWidth == this.el.nativeElement.clientWidth ? false : true
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  touchEnd() {
    this.Ready = false
    this.el.nativeElement.classList.remove('crm-slideOnDrag')
  }

  @HostListener('mousemove', ['$event'])
  moveStart(event: MouseEvent) {
    if (this.Ready) {
      let distanceX = (<MouseEvent>event).movementX;
      this.el.nativeElement.scrollLeft += this.dragElement ? distanceX : -distanceX
      this.el.nativeElement.classList.add('crm-slideOnDrag')
    }
  }

}


