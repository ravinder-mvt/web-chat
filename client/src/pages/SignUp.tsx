import { useForm, type SubmitHandler } from "react-hook-form";
import type { ReactNode } from "react";
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { FormValue } from "@/types/hook";
import Logo from "../assets/asset 105.svg"
import { useSignUpMutation } from "@/hooks/api/auth/apiSlice";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { CardHeader, CardAction, CardFooter, CardContent, CardTitle } from '@/components/ui/card'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { IsLogOut } from "@/hooks/api/auth/googleSlice";
import { IsLogin } from "@/hooks/api/auth/googleSlice";
const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signUp] = useSignUpMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>()

    //handnk
    const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
        try {
            const result = signUp(data).unwrap();
            //with ubnrap we dont need to sne dres.success or responese .error it handle it
            console.log("here si the result", result)
            navigate("/sign-in")
        } catch (error) {
            console.log("heree  is the error", error)
        }

    }



    //HERE IS THE SIGNIN WITH GOOGFLE

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const { displayName, email, photoURL, uid } = result.user
            const userData = {
                displayName,
                email,
                avatar: photoURL,
                uid
            }
            dispatch(IsLogin(userData))
            navigate("/dashboard")

            console.log(displayName, email, photoURL, uid)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <Card className='w-[400px]'>


                <CardHeader>
                    <div className="flex items-center gap-4 flex-col">
                        <Avatar>
                            <AvatarImage src={Logo} className="invert" />

                        </Avatar>
                        <CardTitle>
                            Create your workspace
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>

                    <form action="" onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <label>Username</label>
                                <Input type="text" {...register("userName", {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 10,

                                })} />
                                {
                                    errors.userName && (
                                        <p className="text-red-500">
                                            {errors.userName?.message as ReactNode}
                                        </p>
                                    )
                                }
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <Input type="text" {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format"
                                    }
                                })} />
                                {
                                    errors.email && (

                                        <p className="text-red-500">
                                            {errors.email?.message as ReactNode}
                                        </p>
                                    )
                                }
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password">
                                    password
                                </label>
                                <Input type="text" {
                                    ...register("password", {
                                        required: true,
                                        pattern: {
                                            value: /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/,
                                            message: "Invalid password format"
                                        }
                                    })
                                } />
                                {
                                    errors.password && (
                                        <p className="text-red-500">
                                            {
                                                errors.password?.message as ReactNode
                                            }
                                        </p>
                                    )
                                }
                            </div>
                            <Button className='w-full' variant={"default"} type="submit">Sign In</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='flex-col gap-4 w-full'>
                    <CardAction className='w-full'>
                    </CardAction>
                    <CardAction className='w-full'>
                        <Button variant={'outline'} className='w-full' onClick={signInWithGoogle}>
                            continue with google
                        </Button>
                    </CardAction>

                    <CardAction className="w-full">
                        <div className="flex items-center justify-center">
                            <p className="flex items-center justify-center text-sm">
                                Already have an account?
                                <Link to="/sign-in">
                                    <span className="mx-2 text-pretty text-blue-500 hover:text-b">
                                        Sign up
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </CardAction>

                </CardFooter>
            </Card>
        </div>


    )
}

export default SignUp;