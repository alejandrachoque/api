//database
const db= require('../../database/models')


module.exports={
list:async (req,res)=>{


    const data = await db.Movie.findAll({
        include:['genre','actors'],
        limit:5,
        offset:5
    });
    res.json({
        meta:{
          code:200,
        total: data.length,
         url: 'api/movies'
        },
        movies:data 
        
    })
},
create: async (req,res)=>{
     const data= await db.Movie.create(req.body
     )
     res.json({
        data: data
     })
}
}