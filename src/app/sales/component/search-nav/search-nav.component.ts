import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'searchNav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss'],

})
export class ActivitiesComponent {
  @Output('searchValue') searchValue: EventEmitter<string> = new EventEmitter()
  emitSearchValue(event: any) {
    this.searchValue.emit(event.target.value)
  }
}
