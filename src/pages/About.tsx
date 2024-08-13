import { useNavigate } from "react-router-dom"

export function About() {
    const navigate = useNavigate()
    return (
        <section className="flex flex-col lg:justify-center max-w-[700px] mx-auto bg-background xl:bg-[transparent]">

            <div className="bg-about-image bg-contain w-full aspect-[5/2] bg-center bg-no-repeat mt-2 xl:bg-none xl:aspect-[0]">
                
                {/* <img src="./hero-about.png" alt="van at night" className="w-full" loading="lazy" />  */}

            </div>

            <div className="mx-auto my-4 text-justify px-4 xl:bg-[rgba(233,217,191,0.7)] text-white lg:text-black">
                <div className="p-4">
                    <h2 className="text-black text-[32px] xl:text-4xl font-extrabold md:leading-[38px] text-shadow">Don't squeeze in a sedan when you could relax in a van.</h2>
                    <p className="my-6 lg:text-black lg:text-lg lg:font-bold">
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hithch costs extra 😉)
                    </p>
                    <p className="my-6 lg:text-black lg:font-bold lg:text-lg">
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className="mb-2 bg-light-orange font-bold text-xl p-8 leading-7 flex flex-col justify-around rounded-lg">
                    <h3 className="text-black">Your destination is waiting.</h3>
                    <h3 className="mb-4 text-black">Your van is ready.</h3>
                    <button
                        className="max-w-52 bg-black text-white text-xs py-2 px-4 rounded-lg hover:bg-white hover:text-black"
                        onClick={() => navigate("/vans")}
                    >
                        Explore our vans</button>
                </div>
            </div>
        </section>
    )
}