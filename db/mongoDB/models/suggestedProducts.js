const mongoose = require('mongoose');
const { Schema } = mongoose;

const SuggestedProductSchema = new Schema(
  {
    userId: { type: String },
    productId: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('SuggestedProduct', SuggestedProductSchema);
