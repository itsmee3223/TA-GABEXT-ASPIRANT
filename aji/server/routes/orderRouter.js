const router = require("express").Router();

const orderController = require("../controllers/orderController");

router.route("/new").post(orderController.createNewOrder);

router.route("/").post(orderController.getUserOrders);

router.route("/:id").get(orderController.getSingleOrder);

module.exports = router;
