const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crawlSchema = new Schema ({
    _id: {
        type: Schema.Types.ObjectId,
        quantity: Number,
        auto: true
      },
    title: {
        type: String,
        required: true
    },
    crawl_location: {
        type: String
    },
    venues: {
        type: Array
    },
    authorID: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
})
const Crawl = mongoose.model("Crawl", crawlSchema);

module.exports = Crawl;