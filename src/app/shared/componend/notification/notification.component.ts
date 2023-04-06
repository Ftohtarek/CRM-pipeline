import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fade } from 'src/app/styles/animation-trigger';

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
   * The element that contains the notification box.
   * @type {`ElementRef<HTMLDivElement>`}
   */
  @ViewChild('host') host!: ElementRef<HTMLDivElement>

  /**
  * Indicates whether the notification box is currently open or not.
  * @type {boolean}
  */
  open: boolean = false

  ngOnInit(): void {
    // initializes mouse event listeners that handle hover behaviour.
    this.triger.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.triger.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }
  /** Event Handler for mouseEnter to open notification */
  private onMouseEnter() {
    this.open = true
    // this delay because the coordinate depond on notification it self coordinate. 
    // so i need until it render.
    setTimeout(() => this.setNotificationPosition(), 1);
  }
  /** Event Handler for mouseEnter to open notification */
  private onMouseLeave = () => this.open = false

  /** Sets the position of the notification box relative to the trigger element.*/
  setNotificationPosition() {
    // Calculate the vertical position of the notification box
    let vertical = this.triger.offsetTop - this.host.nativeElement.clientHeight
    // Calculate the horizontal position of the notification box
    let horizontal = this.triger.offsetLeft - this.host.nativeElement.clientWidth / 2 + this.triger.clientWidth / 2

    this.host.nativeElement.style.top = `${vertical}px`
    this.host.nativeElement.style.left = `${horizontal}px`
  }
}
