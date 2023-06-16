const router = require("express").Router();
const Product = require("../model/product");

router.get("/get", async (req, res) => {
  try {
    const data = await Product.find();
    if (data) return res.status(200).json(data);
    else
      return res.status(200).json({ message: "No data Found", type: "warning" });
  } catch (err) {
    res.status(200).json({ message: "Some Problem here", type: "warning" });
  }
});

// router.get("/get/scrap", async (req, res) => {
//   try {
//     const data = await Product.find({ isScrap: true });

//     if (data) return res.status(200).json(data);
//     else
//       return res.status(200).json({ message: "No data Found", type: "Error" });
//   } catch (err) {
//     res.status(200).json({ message: "Some Problem here", type: "Warning" });
//   }
// });

router.get("/scrap/:id", async (req, res) => {
  try {
    const id= req.params.id;
    // console.log(req.params.id);
    Product.findByIdAndUpdate(id,{isScrap: true})
    .then(()=>{
      res.status(200).json({message: "Product Scrapped Successful", type: "success"});
    }).catch((err)=>{
      res.status(200).json({message: "Something Went Wrong!", type: "warning"});
    })
  } catch (err) { 
    res.status(200).json({ message: "Some Problem here", type: "warning" }); 
  } 
}); 

router.post("/filter", async (req, res) => {
  // console.log(req.body);
  try {
    const data = req.body;
    const product = await Product.find({ ...data});
    if (product.length == 0)
      return res
        .status(200)
        .json({ message: "No data Found", type: "warning" });

    return res.status(200).json(product);
  } catch {
    res.status(200).json({ message: "Some Problem here", type: "warning" });
  }
});

router.post("/post", async (req, res) => {
  // console.log(req.body);
  try {
    const product = await Product.findOne({ serialNo: req.body.serialNo });
    // console.log(req.body.serialNo);
    if (product) {
      return res.status(200).json({message: "This Product is already here!", type: "warning"});
    }

    var data;

    //Scanner
    if (req.body.category === "scanner") {
      data = new Product({
        category: req.body.category,
        company: req.body.company,
        model: req.body.model,
        variant: req.body.variant,
        serialNo: req.body.serialNo,
        details: req.body.details,
        warranty: req.body.warranty,
        installDate: req.body.installDate,
      });
      console.log(data);
    }

    //Printer
    else if (req.body.category === "printer") {
      data = new Product({
        category: req.body.category,
        company: req.body.company,
        model: req.body.model,
        variant: req.body.variant,
        serialNo: req.body.serialNo,
        details: req.body.details,
        warranty: req.body.warranty,
        installDate: req.body.installDate,
      });
      console.log(data);
    }

    //Monitor
    //Printer
    else if (req.body.category === "monitor") {
      data = new Product({
        category: req.body.category,
        company: req.body.company,
        model: req.body.model,
        size: req.body.size,
        serialNo: req.body.serialNo,
        details: req.body.details,
        warranty: req.body.warranty,
        installDate: req.body.installDate,
      });
      console.log(data);
    } else {
      data = new Product({
        category: req.body.category,
        monitor_make: req.body.monitor_make,
        cpu_make: req.body.cpu_make,
        model: req.body.model,
        cpu_processor: req.body.cpu_processor,
        size: req.body.size,
        serialNo: req.body.serialNo,
        details: req.body.details,
        warranty: req.body.warranty,
        installDate: req.body.installDate,
      });
    }

    // console.log(req.body);

    if (data.length === 0)
      return res
        .status(200)
        .json({ message: "Please Fill some data", type: "warning" });
    const createdProduct = await data.save();

    res.status(200).json(createdProduct);
  } catch (err) {
    res
      .status(200)
      .json({ message: "Some Internal Error occured", type: "warning" });
  }
});

module.exports = router;
