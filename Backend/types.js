const zod = require('zod');

const createCard = zod.object({
    name : zod.string(),
    description : zod.string(),
    src : zod.string(),
    interest : zod.array(zod.string())
   
})

module.exports = {
    createCard
}