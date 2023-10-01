import mongoose from "mongoose";

const contentModelSchema = mongoose.Schema({
  // schema of content model
  content: {
    // storing the content scraped
    type: String,
    required: true,
  },
  url: {
    // url of website from which content is scraped
    type: String,
    required: true,
  },
  embeddings: {
    type: [Number],
    required: false,
  },
});

const contentModel = mongoose.model("contentModel", contentModelSchema);

module.exports = contentModel;
