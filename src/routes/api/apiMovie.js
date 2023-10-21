const express= require('express');
const router= express.Router();
/**controller */
const apiMovie= require('../../controllers/api/movieController')


/**rutas */
router.get('/movies',apiMovie.list)
router.post('/movies/create',apiMovie.create)




module.exports= router