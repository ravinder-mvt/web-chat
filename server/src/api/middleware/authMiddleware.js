import jwt from "json-web-token";


const authMiddleware = async (req, res, next) => {
    const authHeader = req.header.autorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({
                    message: "Unauthorized"
                })
            }

            req.user = user;
            next();
        })
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
}

export default authMiddleware;