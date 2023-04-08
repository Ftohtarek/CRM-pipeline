import { Component, Directive, ElementRef, Host, Input, OnInit, Optional, SkipSelf, ViewChild } from '@angular/core';
import { fade } from 'src/app/styles/animation-trigger';

@Directive({
  selector: '[notificateFor]'
})
export class notificateFor { }

/**
 * The NotificationComponent displays a notification box
 * when the user hovers over a specified trigger element.
 * The box is positioned relative to the trigger element.
*/
@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [fade]
})
export class NotificationComponent implements OnInit {
  /**
   * The element that triggers the notification.
   * Must be an HTMLElement.
   * @type {HTMLElement}
  */
  @Input('NotificationTragerFor') triger!: HTMLElement
  /**
  * Indicates whether the notification box is currently open or not.
  * @type {boolean}
  */
  open: boolean = false
  get notificateFor() { return <HTMLElement>document.querySelector('[notificateFor]') }

  constructor(private el: ElementRef<HTMLDivElement>) { }
  ngOnInit(): void {
    // initializes mouse event listeners that handle hover behaviour.
    this.triger.style.cursor = 'pointer'
    this.triger.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.triger.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }
  /** Event Handler for mouseEnter to open notification */
  private onMouseEnter(event:any) {    
    this.open = true

    // this delay because the coordinate depond on notification it self coordinate. 
    // so i need 100 until it render.
    setTimeout(() => { this.setNotificationPosition() }, 10);
  }
  /** Event Handler for mouseEnter to open notification */
  private onMouseLeave = () => this.open = false

  /** Sets the position of the notification box relative to the trigger element.*/
  setNotificationPosition() {
    const host = <HTMLElement>this.el.nativeElement.firstElementChild
    // Calculate the vertical position of the notification box
    let vertical = this.triger.offsetTop - host.clientHeight - (this.notificateFor?.scrollTop | 0)
    // Calculate the horizontal position of the notification box
    let horizontal = this.triger.offsetLeft - host.clientWidth / 2 + this.triger.clientWidth / 2 - (this.notificateFor?.scrollLeft | 0)

    host.style.top = `${vertical}px`
    host.style.left = `${horizontal}px`
  }
}
