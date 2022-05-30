// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import connectDB from "../../middleware/mongoose"
import Order from "../../models/Order"

import jsonwebtoken from "jsonwebtoken"

const handler = async (req, res) => {
    const token = req.body.token
    // verify a token symmetric - synchronous
    const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    let orders = await Order.find({ email: data.email, status:'Paid'});
    res.status(200).json({ orders })
  }
  

  
export default connectDB(handler)