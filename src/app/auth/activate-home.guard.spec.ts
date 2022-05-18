import { TestBed } from '@angular/core/testing';

import { ActivateHomeGuard } from './activate-home.guard';

describe('ActivateHomeGuard', () => {
  let guard: ActivateHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
