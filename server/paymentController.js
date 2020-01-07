const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {

    pay: (req, res) => {
        const { token: {id}, amount } = req.body;
        console.log(id, amount, stripe)
        stripe.charges.create(
            {
                amount: amount,
                currency: 'usd',
                source: id,
                description: 'Test Charge'
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log('Payment successful', charge)
                    return res.status(200).send(charge)
                }
            }
        )
    },

}


    // payNow: (async () => {
    //     const paymentIntent = await stripe.paymentIntents.create({
    //         amount: 799999,
    //         currency: 'usd'
    //     });
    // }) (),