export function Home() {
    return (
        <div className="bg-hero-image bg-no-repeat bg-cover h-full text-white px-4">
            <section className="flex flex-col h-full justify-center gap-10">
                <h3 className="font-extrabold text-3xl">You got the travel plans, we got the travel vans.</h3>
                <div className="font-medium">
                    <p className="mb-2">Add adventure to your life by joining the #vanlife movement.</p>
                    <p>Rent the perfect van to make your perfect road trip.</p>
                </div>
                <button className="bg-orange-500 py-2 rounded">Find your van</button>
            </section>
        </div>
    )
}