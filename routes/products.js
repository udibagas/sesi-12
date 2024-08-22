const {
  index,
  show,
  create,
  update,
  remove,
} = require("../controllers/products.controller");
const isAdmin = require("../middlewares/isadmin.middleware");

const router = require("express").Router();

router.get("/", index);
router.get("/:id", show);

router.use(isAdmin);
router.post("/", create); // create product
router.put("/:id", update); // update product
router.delete("/:id", remove);

module.exports = router;
