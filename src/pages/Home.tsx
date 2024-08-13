import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate()
    return (
        <div
            // className="w-full flex md:grow items-center aspect-[16/9] bg-cover bg-center"
            className="w-full flex aspect-[16/9] lg:grow bg-hero-image bg-cover bg-no-repeat items-center xl:bg-none bg-center"
        >
            <section className="xl:bg-[rgba(233,217,191,0.7)] max-w-[500px] mx-auto flex flex-col justify-center gap-10 px-4 py-5 ">
                <h2
                    className="text-white xl:text-black text-4xl font-extrabold md:text-[39px] md:leading-[38px] text-shadow"
                >You got the travel plans, we got the travel vans.</h2>
                <div className="">
                    <p className="mb-2 text-white xl:text-black text-base md:text-2xl md:font-bold">Add adventure to your life by joining the #vanlife movement.</p>
                    <p className="text-white xl:text-black text-base md:text-2xl md:font-bold">Rent the perfect van to make your perfect road trip.</p>
                </div>
                <button className="bg-orange-500 py-2 rounded text-base text-white font-bold hover:bg-white hover:text-orange-500" onClick={() => navigate("/vans")}>Find your van</button>
            </section>
        </div>
    )
}