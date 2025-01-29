const authorise = (req, res, next) => {
    const {user} = req.query;
    if(user === 'sam'){
        req.user = {name: "sam", id:1}
        next()
    }
    else{
        res.status(401).send("Unauthorised")
    }
}

module.exports = authorise  