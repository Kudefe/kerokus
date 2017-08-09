'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, '_') // Replace spaces with -
  .replace(/[^\w\-]+/g, '') // Remove all non-word chars
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text
};

exports.default = slugify;
//# sourceMappingURL=slugify.js.map