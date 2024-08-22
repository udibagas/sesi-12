const {
  index,
  show,
  create,
  update,
  remove,
} = require("../controllers/orders.controller");

const router = require("express").Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
