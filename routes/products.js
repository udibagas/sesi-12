const {
  index,
  show,
  create,
  update,
  remove,
} = require("../controllers/products.controller");

const router = require("express").Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", create); // create product
router.put("/:id", update); // update product
router.delete("/:id", remove);

module.exports = router;
