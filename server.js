//sk_test_51MJMdNAc9GzR57XmUFNTr2wComEs0dkY4iUZ7Lf5nS6kOO24vRxfRXib5L6AlgJdQgQq2fMEUlhdiEF7H7vXpJX600r2moR3EZ

//Diamond Ring: price_1MJNk7Ac9GzR57XmWV14pcVr
//Engagement Ring: price_1MJNo4Ac9GzR57XmiK09NGuV
//Diamond Necklace: price_1MJNp3Ac9GzR57XmT7iaaMhu
//Gold Ring: price_1MJNqXAc9GzR57Xmzd37z9ai

//Tahiti Bracelet: price_1MJNt2Ac9GzR57Xmlpu6Dbtd
//Belize Necklace: price_1MJNuLAc9GzR57XmvAF8trex
//Turqoise Bracelet: price_1MJNvSAc9GzR57XmDVp4zgTP
//Emerald Bracelet: price_1MJNwJAc9GzR57XmzNp8br90

//Onyx Multicolor Bracelet: price_1MJNxRAc9GzR57Xmu8IOP8wM
//Golden Necklace: price_1MJNyeAc9GzR57Xm5472qlSh
//White Gold Braclet: price_1MJO02Ac9GzR57XmljIDOrPp
//Topaz and Onyx Bracelet: price_1MJO0lAc9GzR57Xmmv26NVLI

const express = require('express');
let cors = require('cors');
const stripe= require('stripe')('sk_test_51MJMdNAc9GzR57XmUFNTr2wComEs0dkY4iUZ7Lf5nS6kOO24vRxfRXib5L6AlgJdQgQq2fMEUlhdiEF7H7vXpJX600r2moR3EZ');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.id,
        quantity: item.quantity
      });
    });
  
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
      });
  
      res.send(JSON.stringify({ url: session.url }));
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Failed to create checkout session' });
    }
  });
app.listen(4000, ()=>console.log('listening on PORT 4000'))