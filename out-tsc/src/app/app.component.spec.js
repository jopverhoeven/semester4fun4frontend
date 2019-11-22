import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'products'", async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('products');
    }));
    it('should render title in a h1 tag', async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to products!');
    }));
});
//# sourceMappingURL=app.component.spec.js.map