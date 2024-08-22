const router = require("express").Router();

router.use("/products", require("./products"));
router.use("/orders", require("./orders"));
router.use("/customers", require("./users"));

module.exports = router;
