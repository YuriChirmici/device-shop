const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const authMiddleware = require("../middleware/auth");

router.post("/", authMiddleware(["ADMIN"]), deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getById);

module.exports = router;