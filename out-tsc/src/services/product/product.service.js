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
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { PRODUCTS } from '../../data/mock-products';
import { HttpClient } from '@angular/common/http';
import { DbContextService } from '../database/db-context.service';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../user/user.service';
var ProductService = /** @class */ (function () {
    function ProductService(httpClient, dbContext, userService) {
        this.httpClient = httpClient;
        this.dbContext = dbContext;
        this.userService = userService;
    }
    ProductService.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.dbContext.AuctionURL + "product/all")
                            .pipe(map(function (data) { return products = data; }))
                            .pipe(catchError(this.handleError)).toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    ProductService.prototype.getProductById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.dbContext.AuctionURL + "product/" + id)
                            .pipe(map(function (data) { return product = data; }))
                            .pipe(catchError(this.handleError))
                            .toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductService.prototype.getProductByName = function (name) {
        var products = [];
        for (var _i = 0, PRODUCTS_1 = PRODUCTS; _i < PRODUCTS_1.length; _i++) {
            var product = PRODUCTS_1[_i];
            if (product.name.toLowerCase().includes(name.toLowerCase())) {
                products.push(product);
            }
        }
        return of(products);
    };
    ProductService.prototype.getHighestPriceOfProduct = function (product) {
        // product.bidders.forEach((value: number, key: User) => {
        //   if (value > currentHighestPrice) {
        //     currentHighestPrice = value;
        //   }
        // });
        return product.minimumPrice;
    };
    ProductService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };
    ProductService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            DbContextService,
            UserService])
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=product.service.js.map