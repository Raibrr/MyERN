const Router = require('express');
const {listAll} = require('../../Controller/BadgesController');

const router = Router();
router.get('/',async (req, res) =>{
  try {
    const response = await listAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500)
  }
})

module.exports = router