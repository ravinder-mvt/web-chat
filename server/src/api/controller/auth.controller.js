import signUpSchema from "../validatiom/user.validation.js";
import UserData from "../modal/user.modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const signUp = async (req, res) => {
    const { userName, email, password, role } = req.body
    console.log("here is tge darta=========", userName, email, password)

    // if (!userName || !email || !password) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "All fields are required"
    //     })
    // }

    //here we will use hashpassword
    try {
        const { error, value } = signUpSchema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(401).json({
                success: false,
                message: error.details.map((detail) => detail.message)
            })
        }
        const { userName, email, password, role } = value

        const hashpassword = await bcrypt.hash(password, 10);

        const existingUser = await UserData.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exist"
            })
        }
        const User = await UserData.create({ userName, email, password: hashpassword, role })
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: User
        })
    }

    catch (error) {
        console.error("there is error in signUp", error)
    }
}


// here we will make sign In info here

const signIn = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    //user already exist 

    const User = await UserData.findOne({ email: email })
    if (!User) {
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })

    }
    //is match
    const isMatch = await bcrypt.compare(password, User.password);

    if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Password is incorrect"
        })
    }


    //generate JWT token in that


    const token = jwt.sign({ id: User._id, userName: User.userName, email: User.email, role: User.role }, process.env.SECRET_TOKEN, { expiresIn: "1d" })


    return res.status(200).json({
        success: true,
        message: "User signed in successfully",
        data: {
            token,
            id: User._id,
            userName: User.userName,
            email: User.email,
            role: User.role
        }
    })
}


export {
    signUp,
    signIn
}