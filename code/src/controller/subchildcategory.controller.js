const { subchildcategoryService } = require("../services");

const createChildeCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody, "++++subchild");
    const child = await subchildcategoryService.createChildeCategory(reqBody);
    if (!child) {
      throw new Error("no found sub child category");
    }
    res.status(201).json({
      message: "created",
      data: child,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getChildCategory = async (req, res) => {
  try {
    let child = await subchildcategoryService.getChildList(req, res);
    res.status(200).json({
      data: child ,
      message: "success",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getChildCategoryId = async (req, res) => {
  try {
    const child = await subchildcategoryService.getChildCategoryId(
      req.params.childId
    );
    if (!child) {
      throw new Error("not found");
    }
    res.status(200).json({
      //    data:[child],
      //                     ...child[0]
      data: { child },
      message: "success",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteChildCategory = async (req, res) => {
  try {
    const childId = req.params.childId;
    const child = await subchildcategoryService.getChildCategoryId(childId);
    if (!child) {
      throw new Error("not found");
    }
    await subchildcategoryService.deleteChildId(childId);
    res.status(200).json({
      data: { child },
      message: "success",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  deleteChildCategory,
  getChildCategoryId,
  getChildCategory,
  createChildeCategory,
};
