import { TestBed } from '@angular/core/testing';

import { ActivateHomeProductsGuard } from './activate-home-products.guard';

describe('ActivateHomeProductsGuard', () => {
  let guard: ActivateHomeProductsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateHomeProductsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
