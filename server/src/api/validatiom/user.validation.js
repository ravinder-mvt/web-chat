import Joi from "joi";
const signUpSchema=Joi.object({
    userName:Joi.string().min(3).max(20).required(),
    email:Joi.string().min(3).max(30).required(),
    password:Joi.string().min(3).max(130).required(),
    role:Joi.string().valid("admin","user","super-admin").default("user")
})

export default signUpSchema;
    