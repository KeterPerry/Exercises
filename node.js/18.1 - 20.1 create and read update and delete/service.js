import { Product } from "./product.model.js";

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(200).send(newProduct);
  } catch (e) {
    res.status(400).send(e);
  }
};

///////////////////////////////////////////

export const getAllProducts = async (req, res) => {
  ////needs to be checked
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status(500).send();
  }
};
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
export const getSpecificProduct = async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
};

////////////////////////////////////////////////////////////////////////

export const getActive = async (req, res) => {
  const isActive = req.body.isActive;
  try {
    const products = await Product.find({ isActive });
    if (!products) {
      return res.status(404).send();
    }
    res.send(products);
  } catch {
    res.status(500).send();
  }
};

/////////////////////////////////////////////////////
export const getByPriceRange = (req, res) => {
  ///needs to be checked
  const maxPrice = req.body.maxPrice;
  const minPrice = req.body.minPrice;
  console.log(minPrice, maxPrice);

  try {
    const producsInRange = Product.find({
      "details.price": { $lte: maxPrice, $gte: minPrice },
    });
    if (!producsInRange) {
      return res.status(404).send();
    }
    res.send(producsInRange);
  } catch {
    res.status(500).send();
  }
};

/////////////////////////////////////////////////////

export const update = async (req, res) => {
  const _id = req.params.id;
  const fieldsToUpdate = req.body;
  const updates = Object.keys(req.body); /// turns the body to array of str
  const allowedUpdates = ["name", "category", "isActive", "price"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const productUpdated = await Product.findByIdAndUpdate(
      _id,
      fieldsToUpdate,
      { new: true, runValidators: true }
    );
    if (!productUpdated) {
      res.status(404).send();
    }
    res.send({ data: productUpdated });
  } catch (e) {
    res.status(400).send(e);
  }
};
/////////////////////////////////////////////////////
export const deleteSpecificProduct = async (req, res) => {
  const _id = req.params.id;
  try {
    const productToDelete = await Product.findByIdAndDelete(_id);
    res.send({ data: productToDelete });
  } catch (e) {
    res.status(500).send();
  }
};

/////////////////////////////////////////////////////////////

export const deleteAll = async (req, res) => {
  try {
    const allProductSToDelete = await Product.deleteMany();
    res.send(allProductSToDelete);
  } catch (e) {
    res.status(500).send();
  }
};
