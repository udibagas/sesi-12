const auth = require("../middlewares/auth.middleware");
const router = require("express").Router();

router.use(require("./auth"));

router.use(auth);
router.use("/products", require("./products"));
router.use("/orders", require("./orders"));
router.use("/customers", require("./users"));

module.exports = router;
