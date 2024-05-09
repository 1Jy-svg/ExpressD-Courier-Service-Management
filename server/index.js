const express = require('express')
const stripe = require('stripe')("sk_test_51P2vkoSAEiT15doWRuuhuWWJy5yze1tn7M5wxs04EVeaMDcWLSb2vlc53DkGy0crCTR9r12QP8aao0LkZayFr3Pr00IEC1ZpzG")
const bodyparser = require ('body-parser')
const cors = require ('cors')
const app = express()
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser. json())
app.use(cors())
app.post('/checkout', async (req, res) =>{
console. log(req.body)
try {
    token = req.body.token;
    const customer = stripe.customers
      .create({
        email: "abc@gmail.com",
        source: token.id,
      })
      .then((customer) => {
        console.log(customer);
        return stripe.charges.create({
          amount: 1000,
          description: "ExpressD",
          currency: "INR",
          customer: customer.id,
        });
      })
      .then((charge) => {
        console.log(charge);
        res.json({
          data: "success",
        });
      })
      .catch((err) => {
        res.json({
          data: "failure",
        });
      });
  } catch (error) {
    res.json({
      data: "failure",
    });
  }
  
})
app.listen (5000, () =>{
console. log("App is listening on port 5000")
})