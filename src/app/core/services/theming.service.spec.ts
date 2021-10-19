import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SharedTestingModule } from '../../shared/shared-testing.module';

import { ThemingService } from './theming.service';

describe('ThemingService', () => {
  let store: MockStore;
  let service: ThemingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      providers: [provideMockStore({ initialState: { theming: { darkMode: false, theme: 'blue-steel' } } })],
    });

    store = TestBed.inject(MockStore);
    service = TestBed.inject(ThemingService);
  });

  it('should be created', () => expect(service).toBeTruthy());

  it('should be able to activate dark mode', () => {
    const storeDispatchSpy = jest.spyOn(service['store'], 'dispatch');

    service.darkMode = true;
    expect(storeDispatchSpy).toHaveBeenCalled();
  });

  it('should be able to deactivate dark mode', () => {
    const storeDispatchSpy = jest.spyOn(service['store'], 'dispatch');

    service.darkMode = false;
    expect(storeDispatchSpy).toHaveBeenCalled();
  });

  it('should be able to set the theme', () => {
    const storeDispatchSpy = jest.spyOn(service['store'], 'dispatch');

    service.theme = 'barney';
    expect(storeDispatchSpy).toHaveBeenCalled();
  });

  it('should make & return a CSS class name for the current theme & dark mode setting', () => {
    const makeClassNameSpy = jest.spyOn(ThemingService, 'makeClassName' as never);

    expect(service.className).toEqual('blue-steel-light-theme');

    store.setState({ theming: { darkMode: true, theme: 'barney' } });

    expect(service.className).toEqual('barney-dark-theme');

    expect(makeClassNameSpy).toHaveBeenCalledTimes(2);
  });

  it('should provide a CSS class name stream', (done) => {
    service.className$.subscribe((value) => {
      expect(value).toEqual('blue-steel-light-theme');
      done();
    });
  });
});
