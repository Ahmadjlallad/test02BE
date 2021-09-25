const { default: axios } = require("axios");
const Model = require("./Model");

class Reshaper {
  constructor(imageUrl, description, numHearts, price, numViews) {
    this.imageUrl = imageUrl;
    this.description = description;
    this.numHearts = numHearts;
    this.price = price;
    this.numViews = numViews;
  }
}
const getAllChocolateData = async (req, res) => {
  try {
    {
      const { data } = await axios.get(
        `https://ltuc-asac-api.herokuapp.com/allChocolateData`
      );
      const reshapedData = data.map(
        ({ imageUrl, description, numHearts, price, numViews }) => {
          return new Reshaper(
            imageUrl,
            description,
            numHearts,
            price,
            numViews
          );
        }
      );
      res.send(reshapedData);
    }
  } catch (err) {
    res.send(err);
  }
};
const getUserChocolateData = async (req, res) => {
  const { email } = req.query;
  try {
    const userChocolate = await Model.find({ email });
    res.send(userChocolate);
  } catch (err) {
    res.send(err);
  }
};
const addUserChocolateData = async (req, res) => {
  try {
    await Model.create(req.body);
    res.send("success");
  } catch (err) {
    res.send(err);
  }
};
const deleteUserChocolateData = async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.send("deleted successfully");
  } catch (err) {
    res.send(err);
  }
};
const updateUserChocolateData = async (req, res) => {
  try {
    await Model.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated successfully");
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  getAllChocolateData,
  getUserChocolateData,
  addUserChocolateData,
  deleteUserChocolateData,
  updateUserChocolateData,
};
