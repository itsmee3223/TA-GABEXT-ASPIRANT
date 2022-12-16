const router = require("express").Router();

const adminController = require("../controllers/adminController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");

const auth = require("../middleware/Auth");

router.route("/auth").post(adminController.sendCurrentUser);

router
  .route("/register")
  .post(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("super"),
    adminController.registerAdmin
  );

router.route("/login").post(adminController.loginAdmin);

router.route("/logout").get(adminController.logoutAdmin);

router
  .route("/users")
  .get(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("super"),
    adminController.getAllAdminDetails
  );

router
  .route("/users/:id")
  .get(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("super"),
    adminController.getSingleAdminDetails
  )
  .put(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("super"),
    adminController.updateAdminPrivilege
  )
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("super"),
    adminController.deleteAdmin
  );

router
  .route("/product/new")
  .post(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("moderate", "super"),
    productController.createProduct
  );

router
  .route("/product/:id")
  .put(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("moderate", "super"),
    productController.updateProduct
  )
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("moderate", "super"),
    productController.deleteProduct
  );

router
  .route("/product/review/:id")
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("moderate", "super"),
    productController.deleteReview
  );

router
  .route("/orders")
  .get(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("moderate", "super", "low"),
    orderController.getAllOrders
  );

router
  .route("/order/:id")
  .put(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("moderate", "super", "low"),
    orderController.updateOrderStatus
  )
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges("moderate", "super"),
    orderController.deleteOrder
  );

module.exports = router;
