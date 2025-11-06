
import Img1 from "../assets/asset 22.svg"
import { RawData } from "@/utills/RawData"
const HeroSection = () => {

    console.log("here is the raw data===========>>>>>..", RawData)
    return (

        <div className="my-8 items-center justify-center flex-col flex py-10">
            <h1 className="flex items-center flex-col   font-medium justify-center  text-6xl">
                <span className="flex max-w-xl">
                    Linear is bringing
                </span>

                <span className="flex max-w-2xl">

                    magic back to software
                </span>

            </h1>
            <div className="flex items-center h-64 w-full py-40 mt-20 justify-center bg-no-repeat bg-center bg-contain" style={{
                backgroundImage: `url(${Img1})`
            }}>
            </div>
            <div className="flex items-center flex-col   font-medium justify-center  text-xl py-10 my-10">

                <h1 className="flex items-center justify-center text-xl font-semibold capitalize">
                    Powering the world’s best product teams.
                </h1>
                <h2 className="flex items-center justify-center capitalize text-slate-400">
                    From next-gen startups to established enterprises.
                </h2>
            </div>


            {/* griid layoutw */}

            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {RawData.map((item, index) => (
                    <div key={index} className="w-[170px]">
                        <img
                            src={item.img}
                            alt=""

                            className="w-full h-full object-cover  rounded-xl"
                        />
                    </div>
                ))}
            </div>

            <div className="flex items-start my-20 py-4 justify-center gap-10">

                <div>
                    <h1 className="max-w-lg text-4xl tracking-wider font-medium">
                        We're crafting the project planning tool for teams that care about quality
                    </h1>
                </div>
                <div>
                    <p className="flex flex-col gap-4 items-center max-w-xl text-md text-slate-300">
                        <span>
                            Computers used to be magical. But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold back great work. Frustrated with the status quo, we decided to build something better. Something that teams would actually enjoy using. We named it Linear to signify progress.
                        </span>
                        <span>
                            What started as a simple issue tracker, has since evolved into a powerful project and issue tracking system that streamlines workflows across the entire product development process. We don't think of Linear as just a better "tool", but as a better "way" to build software.
                        </span>
                        <span>
                            Today, thousands of teams around the globe — from early-stage startups to public companies — use Linear to build their products. Linear helps them to focus on what they do best: Crafting software experiences that feel magical again.



                        </span>
                    </p>
                </div>
            </div>

        </div>

    )
}

export default HeroSection