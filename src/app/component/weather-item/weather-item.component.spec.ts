import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWeatherComponent } from './item-weather.component';

describe('ItemWeatherComponent', () => {
  let component: ItemWeatherComponent;
  let fixture: ComponentFixture<ItemWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
