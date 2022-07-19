export default function  handler(req, res){
    const id = +req.query.id
    res.status(200).json({
        id,
        nome: `João Viroe ${id}`,
        email: `vitor.vitor${id}@gmail.com ` 
    })
}