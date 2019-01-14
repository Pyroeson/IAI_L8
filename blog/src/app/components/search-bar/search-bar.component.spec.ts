import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, EventEmitter, OnInit, Output} from
    '@angular/core';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filterText: string;

  @Output() name = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  sendFilter() {
    this.name.emit(this.filterText);
  }
}
