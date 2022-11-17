
exports.Category= {
  products: ({id}, args, {db}) => {
    return db.products.filter((p) => p.categoryId === id);
  },
}