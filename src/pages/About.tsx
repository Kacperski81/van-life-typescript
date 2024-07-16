import { useNavigate } from "react-router-dom"

export function About() {
    const navigate = useNavigate()
    return (
        <section className="flex flex-col grow bg-background lg:max-w-[800px] mx-auto">
            <div className="aspect-[2.24/1] bg-about-image md:bg-about-image-hd bg-cover bg-center">
                {/* <img src="./hero-about.png" alt="van at night" className="w-full" loading="lazy" />  */}
            </div>
            <div className="mx-auto my-4 text-justify px-4">
                <div className="">
                    <h2 className="my-6">Don't squeeze in a sedan when you could relax in a van.</h2>
                    <p className="my-6">
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hithch costs extra 😉)
                    </p>
                    <p className="my-6">
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className="mb-2 bg-light-orange font-bold text-xl p-8 leading-7 flex flex-col justify-around rounded-lg">
                    <h3 className="">Your destination is waiting.</h3>
                    <h3 className="mb-4">Your van is ready.</h3>
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