export function About() {
    return (
        <section className="flex flex-col">
            <div className=""> 
                <img src="./hero-about-hd.png" alt="van at night" className="w-full" />
            </div>
            <div className="px-4 my-4 text-justify">
                <h2 className="my-6">Don't squeeze in a sedan when you could relax in a van.</h2>
                <p className="my-6 font-medium leading-5">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hithch costs extra 😉)</p>
                <p className="font-medium leading-5 mt-4 mb-10">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="bg-light-orange font-bold text-xl p-8 leading-7">
                    <h3 className="">Your destination is waiting.</h3>
                    <h3 className="mb-4">Your van is ready.</h3>
                    <button className="bg-black text-white text-xs py-2 px-4 rounded-lg">Explore our vans</button>
                </div>
            </div>
        </section>
    )
}