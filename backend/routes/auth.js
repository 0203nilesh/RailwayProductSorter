const router = require("express").Router();
const User = require("../model/user");

router.post("/login", async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.username });
    if (!user)
      return res
        .status(200)
        .json({ message: "You are not registered to BLW yet!", type: "warning" });

    if (req.body.password != user.password)
      return res
        .status(200)
        .json({ message: "Incorrect Password!", type: "warning" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "Some Error is still there! Please Check your Code",
      type: "warning",
    });
  }
});

module.exports = router;
