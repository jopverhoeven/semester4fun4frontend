import { CATEGORIES } from './mock-category';
import { USERS } from './mock-users';
import { IMAGE } from './mock-images';
export var PRODUCTS = [
    {
        id: 1,
        name: 'Fruit',
        description: 'Vers fruit! Nu in de aanbieding',
        minimumPrice: 1,
        seller: USERS[0],
        image: IMAGE[0],
        expirationdate: new Date(2019, 4, 10, 12, 0, 0, 0),
        category: [CATEGORIES[1]]
    },
    {
        id: 2,
        name: 'Laptop',
        description: 'Nieuwe laptop, gloednieuw!',
        minimumPrice: 1,
        seller: USERS[5],
        image: IMAGE[1],
        expirationdate: new Date(2019, 4, 11, 13, 0, 0, 0),
        category: [CATEGORIES[0]]
    }
];
//# sourceMappingURL=mock-products.js.map