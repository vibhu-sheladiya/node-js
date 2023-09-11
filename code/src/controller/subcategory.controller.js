const { subcategoryService } = require("../services");

const createSubCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody, "++++++reqbody.subcategory");
    const subcategory = await subcategoryService.createSubCategory(reqBody);
    if (!subcategory) {
      throw new Error("Error while creating the Sub Category");
    }
    res.status(200).json({
      message: "Successfully created",
      data: { subcategory },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getSubCategoryList = async (req, res) => {
  try {
    let subcategory = await subcategoryService.getSubCategoryList(req, res);
    res.status(200).json({
      message: "successfully fetched all Categories list",
      data:  subcategory , //for pagination use this format
      success: true, //for pagination use this format
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getSubCategoryId = async (req, res) => {
  try {
    const subcategory = await subcategoryService.getSubCategoryId(
      req.params.subcategoryId
    );
    if (!subcategory) {
      throw new Error("No such category found");
    }
    res.status(200).json({
      message: `Fetched ${subcategory._id}`,
      success: true,
      data: { subcategory }, //for pagination use this format
      //        count :count,          //for pagination use this format
      //         pageCount:(pageCount),     //for pagination use this format
      //           currentPageNumber :(pageNumber+1)//for pagination use this format
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const subcategory = await subcategoryService.getSubCategoryId(
      subcategoryId
    );
    if (!subcategory) {
      throw new Error("no such Sub Category Found");
    }
    await subcategoryService.deleteSubCategory(subcategoryId);
    res.status(200).json({
      success: true,
      message: "deleted successfully",
      date: { subcategory },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateSubProduct = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const subproductEx = await subcategoryService.getSubCategoryId(subcategoryId);
    if (!subproductEx) {
      throw new Error("subproduct does not exist");
    }
    await subcategoryService.updateSubProduct(subcategoryId, req.body);
    res.status(201).json({
      success: true,
      message: "successfully updated",
      data: { subproductEx },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createSubCategory,
  getSubCategoryList,
  getSubCategoryId,
  deleteSubCategory,
  updateSubProduct
};
