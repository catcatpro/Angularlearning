import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
   const service:ValueService = TestBed.get(ValueService)
   expect(service).toBeTruthy()
  });

  it("should use ValueService", () => {
   const service:ValueService = TestBed.get(ValueService)
   expect(service.getValue()).toBe('real value')
    
  })

  it("#getValue should return real value", () => {
    expect(service.getValue()).toBe("real value")
  })

  it("#getObservableValue should return value from obserable", (done: DoneFn) => {
    service.getObservableValue().subscribe(value =>{
      expect(value).toBe("observable value")
      done()
    })
  })


  it("#getPromiseValue should return value from a promise", (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe("promise value")
      done()
    })
  })
});
