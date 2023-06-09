import addProduct from "../../modale/addProduct.js";
import enquiry from "../../modale/enquiry.js";
import userEnquiry from "../../modale/userEnquiry.js";

export const latestProduct = async (req, res) => {
  try {
    const latestProduct = await addProduct
      .find(
        {},
        {
          product_name: 1,
          category: 1,
          modalNum: 1,
          brand:1
        }
      )
      .limit(5)
      .sort({ $natural: -1 });

    return res.status(200).json({ result: latestProduct });
  } catch (error) {
    console.log("error----->", error.message);
    return res.status(500).json("someting went wrong......");
  }
};
export const latestUserEnquiries = async (req, res) => {
  try {
    const latestUserEnquiries = await userEnquiry
      .find(
        {},
        {
          product_name: 1,
          email: 1,
          phone_number: 1,
          location: 1,
        }
      )
      .limit(5)
      .sort({ $natural: -1 });
    return res.status(200).json({ result: latestUserEnquiries });
  } catch (error) {
    console.log("error----->", error.message);
    return res.status(500).json("someting went wrong......");
  }
};
export const latestTradeEnquiries = async (req, res) => {
  try {
    const latestTradeEnquiries = await enquiry
      .find(
        {},
        {
          companyName: 1,
          email: 1,
          phoneNo: 1,
          location: 1,
        }
      )
      .limit(5)
      .sort({ $natural: -1 });
    return res.status(200).json({ result: latestTradeEnquiries });
  } catch (error) {
    console.log("error----->", error.message);
    return res.status(500).json("someting went wrong......");
  }
};
