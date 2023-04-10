import { Component, EventEmitter, Output, Directive } from '@angular/core';
let searchValue: EventEmitter<string> = new EventEmitter()

@Directive({ selector: '[valueOfSearch]' })

export class SearchValueDirective {
  @Output('valueOfSearch') valueOfSearch: EventEmitter<string> = searchValue
}

@Component({
  selector: 'search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss'],

})

export class SearchNavComponent {
  emitSearchValue(event: any) {
    searchValue.emit(event.target.value)
  }
}
