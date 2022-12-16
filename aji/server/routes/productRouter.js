const router = require("express").Router();

const productController = require("../controllers/productController");

router.route("/").get(productController.getAllProducts);

router.route("/:id").get(productController.getSingleProduct);

router.route("/reviews").post(productController.createProductReview);

router.route("/reviews/:id").get(productController.getAllReviews);

module.exports = router;
