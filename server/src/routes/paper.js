const router = require("express").Router();
const paperController = require("../controller/paperController");
const upload = require("../middleware/upload");

router.get("/", paperController.index);
router.post("/show", paperController.show);
// router.post("/store", upload.single("avatar"), paperController.store);
// 만약 업로드할 파일이 여러개인 경우
// router.post("/store", upload.array("avatar[]"), paperController.store);
router.post("/update", paperController.update);
router.post("/delete", paperController.destroy);

module.exports = router;
