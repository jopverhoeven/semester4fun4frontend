import { TestBed } from '@angular/core/testing';
import { BidService } from './bid.service';
describe('BidService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BidService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bid.service.spec.js.map