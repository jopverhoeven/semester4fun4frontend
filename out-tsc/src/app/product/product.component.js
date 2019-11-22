var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ProductService } from './../../services/product/product.service';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, formBuilder) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.moment = moment;
        this.currentTime = new Date();
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.searchForm = this.formBuilder.group({
            search: ['', Validators.required]
        });
    };
    ProductComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchedProducts;
            var _this = this;
            return __generator(this, function (_a) {
                if (String(this.searchForm.value.search) === '') {
                    this.products = this.fullProducts;
                    return [2 /*return*/];
                }
                searchedProducts = [];
                this.fullProducts.forEach(function (element) {
                    if (element.name.toLowerCase().includes(String(_this.searchForm.value.search).toLowerCase())) {
                        searchedProducts.push(element);
                    }
                });
                this.products = searchedProducts;
                return [2 /*return*/];
            });
        });
    };
    ProductComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productService.getProducts().then(function (data) { return _this.products = data; })];
                    case 1:
                        _a.sent();
                        this.fullProducts = this.products;
                        this.productCount = this.products.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent.prototype.getHighestPrice = function (product) {
        // let currentHighestPrice = 0;
        // product.bidders.forEach((value: number, key: User) => {
        //   if (value > currentHighestPrice) {
        //     currentHighestPrice = value;
        //   }
        // });
        return product.minimumPrice;
    };
    ProductComponent.prototype.expirationTimer = function () {
        var _this = this;
        setInterval(function () {
            _this.currentTime = new Date();
        }, 1000);
    };
    ProductComponent.prototype.timeLeft = function (expirationDate) {
        return new Date(expirationDate.valueOf() - this.currentTime.valueOf());
    };
    Object.defineProperty(ProductComponent.prototype, "search", {
        get: function () {
            return this.searchForm.get('search');
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent = __decorate([
        Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }),
        __metadata("design:paramtypes", [ProductService,
            FormBuilder])
    ], ProductComponent);
    return ProductComponent;
}());
export { ProductComponent };
//# sourceMappingURL=product.component.js.map