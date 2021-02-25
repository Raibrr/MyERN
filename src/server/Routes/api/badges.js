const Router = require('express');
const { ValidationError } = require('joi')
const badgesValidation = require('../../Validation/BadgesValidation');
const {listAll, list, saveBadge, updateBadge, deleteBadge} = require('../../Controller/BadgesController');

const router = Router();
router.get('/',async (req, res) =>{
  try {
    const response = await listAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500)
  }
});

router.get('/:badgeId', async (req,res) => {
  try{
    const { badgeId } = req.params;
    const response = await list(badgeId);
    res.status(200).json(response)
  }catch (error){
    /* 
    
      Como manejar el EmtyResponse?
    
    */
    console.log(error);
    res.status(500);
  }
});

router.post('/new/badge', async (req, res) =>{
  try{
    const { error, value } = await badgesValidation(req.body)
    console.log(value);

    if(error){
      throw error;
    }
    
    const response = await saveBadge(value);
    res.status(201).json(response)
  }catch (err){
    if (err instanceof ValidationError) {
      res.status(422).json(err.details);
    }
    console.log(err);
    res.status(500).end();
  }
})


router.put('/:id/update-badge', async (req, res) => {
  try{
    const { id } = req.params;
    const { error, value } = await badgesValidation(req.body)
    console.log(value, id);

    if(error){
      throw error;
    }
    
    const response = await updateBadge(value, id);
    res.status(201).json(response);
  } catch(err){
    if (err instanceof ValidationError) {
      res.status(422).json(err.details);
    }
    console.log(err, 'error de catch');
    res.status(500).end()
  }
});

router.delete('/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteBadge(id);
    res.status(200).send(`Removed badge with id ${id}`);
    console.log(`removes badge with id ${id}`);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

module.exports = router