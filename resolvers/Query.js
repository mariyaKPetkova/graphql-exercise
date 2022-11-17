
exports.Query= {
  hi: () => {
    return "Hello";
  },
  products: (parent, args, {db}) => {
    return db.products;
  },
  product: (parent, {id}, {db}) => {
    return db.products.find((p) => p.id === id);
  },
  categories: (parent, args, {db}) => {
    return db.categories;
  },
  category: (parent, { id }, {db}) => {
    return db.categories.find((c) => c.id === id);
  },
}