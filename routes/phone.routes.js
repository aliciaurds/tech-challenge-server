const router = require("express").Router();
const phonesData= require("../data/phones.json")

//GET "/api/phones" leer la lista de telefonos del json
router.get("/", (req, res, next) => {
res.json(phonesData)
})


module.exports = router