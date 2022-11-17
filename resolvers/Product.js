
exports.Product= {
  category: ({ categoryId }, args, {db}) => {
    return db.categories.find((c) => c.id === categoryId);
  },
}