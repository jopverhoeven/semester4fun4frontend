import { TestBed } from '@angular/core/testing';
import { DbContextService } from './db-context.service';
describe('DbContextService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DbContextService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=db-context.service.spec.js.map