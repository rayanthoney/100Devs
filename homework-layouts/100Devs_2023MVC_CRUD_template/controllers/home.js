const ItemList = require("../models/itemlist");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const items = await ItemList.find();
      res.render("index.ejs", { itemList: items });
    } catch (error) {
      if (error) return res.status(500).send(error);
    }
  },
  createItem: async (req, res) => {
    const newItem = new ItemList({
      textInput: req.body.textInput,
      numInput: req.body.numInput,
    });
    try {
      await newItem.save()
      console.log(newItem)
      res.redirect('/')
    } catch (error) {
      if (error) return res.status(500).send(error);
      res.redirect('/')
    }
  },
};
