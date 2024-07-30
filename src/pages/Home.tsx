import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate()
    return (
        <div
            // className="w-full flex md:grow items-center aspect-[16/9] bg-cover bg-center"
            className="w-full flex md:grow items-center aspect-[16/9] bg-hero-image md:bg-none bg-cover bg-center"
        >
            <section className="md:bg-[rgba(0,0,0,0.1)] max-w-[500px] mx-auto flex flex-col justify-center gap-10 px-4 py-5">
                {/* <h3 className="font-extrabold text-[36px] leading-10">You got the travel plans, we got the travel vans.</h3> */}
                <h2
                    className="text-[#FFF] text-4xl font-extrabold md:text-[39px] md:leading-[38px] md:text-shadow"
                >You got the travel plans, we got the travel vans.</h2>
                <div className="">
                    <p className="mb-2 text-white text-base md:text-2xl md:font-bold md:text-shadow">Add adventure to your life by joining the #vanlife movement.</p>
                    <p className="text-white text-base md:text-2xl md:font-bold md:text-shadow">Rent the perfect van to make your perfect road trip.</p>
                </div>
                <button className="bg-orange-500 py-2 rounded text-base text-white font-bold hover:bg-white hover:text-orange-500" onClick={() => navigate("/vans")}>Find your van</button>
            </section>
        </div>
    )
}