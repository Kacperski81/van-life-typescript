import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <div className="w-full aspect-[16/9] bg-background bg-hero-image bg-cover bg-center text-white">
            <section className="max-w-[500px] mx-auto flex flex-col h-full justify-center gap-10 px-4">
                <h3 className="font-extrabold text-[36px] leading-10">You got the travel plans, we got the travel vans.</h3>
                <div className="text-[16px] leading-5">
                    <p className="mb-2">Add adventure to your life by joining the #vanlife movement.</p>
                    <p>Rent the perfect van to make your perfect road trip.</p>
                </div>
                <button className="bg-orange-500 py-2 rounded" onClick={() => navigate("/vans")}>Find your van</button>
            </section>
        </div>
    )
}