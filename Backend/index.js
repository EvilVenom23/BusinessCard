const express = require('express');
const { createCard } = require('./types');
const { card } = require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/add' , async (req, res) => {
    const cardPayload = req.body;
    const parsedCard = createCard.safeParse(cardPayload);
    if(!parsedCard.success){
        res.status(411).json({
            msg : "Inputs are invalid"
        })
        return;
    }
    await card.create({
        name : cardPayload.name,
        description : cardPayload.description,
        src : cardPayload.src,
        interest : cardPayload.interest
    })

    res.json({
        msg : "todo has been created"
       })
})

app.get('/see',  async (req, res) => {
    const cards = await card.find({});

    res.json({
        cards
    })
})

app.put('/update', async (req, res) => {

})

app.listen(3000);