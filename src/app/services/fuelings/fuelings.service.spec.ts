import { TestBed } from '@angular/core/testing';

import { FuelingsService } from './fuelings.service';

describe('FuelingsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FuelingsService = TestBed.get(FuelingsService);
        expect(service).toBeTruthy();
    });
});
