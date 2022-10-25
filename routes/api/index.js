const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// router.use("/user", userRoutes);
router.use("/users", userRoutes);
// router.use("/thought", thoughtRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
