import { TestBed } from '@angular/core/testing';

import { QuizzHttpService } from './quizz-http.service';

describe('QuizzHttpService', () => {
  let service: QuizzHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
