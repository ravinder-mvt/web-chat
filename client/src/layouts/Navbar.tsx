import Logo from "../assets/asset 105.svg"
import { FeatureData } from "@/utills/FeatureData"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
const Navbar = () => {
    return (
        <nav className="p-4 border-b ">

            <div className="custom-container flex items-center justify-between">
                <div className="flex items-center justify-center gap-4">
                    <Link to={"/"}>
                        <img src={Logo} alt="logo" className="invert" />
                    </Link>
                    <h1 className="text-lg font-semibold">
                        Syntrix
                    </h1>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    {
                        FeatureData.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center justify-center gap-4">
                                    <Link to={item.href} className="text-slate-300 hover:text-white">{item.title}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <Link to={"/sign-in"}>
                        <Button variant="secondary" className="outline-none hover:text-black hover:bg-white transition-ease-in-out duration-700">Log in</Button>
                    </Link>
                    <Link to="/sign-up">
                        <Button variant="default" size={"sm"}>
                            Sign up
                        </Button>
                    </Link>


                </div>
            </div>

        </nav>
    )
}

export default Navbar