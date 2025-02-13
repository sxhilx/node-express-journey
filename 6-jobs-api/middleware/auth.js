const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors/index')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){                            
        throw new UnauthenticatedError('No token provided')
    }

    const token = authHeader.split(' ')[1] // after spliting looking for the second value (the token)

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const {userId, name} = decode
        req.user = {userId, name}
        next()

    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

module.exports = authMiddleware