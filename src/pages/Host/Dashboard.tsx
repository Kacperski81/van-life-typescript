import { BsStarFill } from 'react-icons/bs';
import { Link, useLoaderData, Await } from 'react-router-dom';
import { Van } from '../../types';
import { Suspense } from 'react';

export function Dashboard() {
    const { hostVans } = useLoaderData() as { hostVans: Van[] }

    function renderHostVans(vans: Van[]) {
        return (
            <div className="flex flex-col gap-2">
                {vans.map((van) => {
                    return (
                        <div key={van.id} className="flex items-center gap-2 bg-[#fff] p-4 rounded-lg text-base">
                            <div className="w-[70px] aspect-square rounded-lg overflow-hidden">
                                <img src={van.imageUrl} />
                            </div>
                            <div className="grow">
                                <h3 className="text-xl font-semibold">{van.name}</h3>
                                <h4 className="text-[#4D4D4D]">${van.price}/day</h4>
                            </div>
                            <Link to={`/host/vans/${van.id}`}>Edit</Link>
                        </div>

                    )
                })

                }
            </div>
        )
    }

    return (
        <>
            <section className="max-w-[550px] bg-[#FFEAD0] flex py-4 px-2">
                <div className="grow flex flex-col gap-5">
                    <h2 className="text-4xl">Welcome!</h2>
                    <p className="">Income last <span className="font-bold underline">30 days</span></p>
                    <p className="text-5xl font-extrabold">$2,260</p>
                </div>
                <Link
                    to="income"
                    className="self-center flex justify-end text-base"
                >Details</Link>
            </section>
            <section className="bg-[#FFDDB2] max-w-[550px] px-2 py-8 flex items-center gap-2">
                <h3 className="text-2xl font-bold">Review score
                </h3>
                <BsStarFill className="fill-[#FF8C38] text-3xl" />
                <p className="grow text-xl">
                    <span className="font-bold">5.0</span>/5
                </p>
                <Link to="reviews" className="text-base text-[#161616]">Details</Link>
            </section>
            <section className="max-w-[550px] flex flex-col p-4">
                <div className="grow flex items-baseline py-4">
                    <h2 className="grow font-bold text-2xl">Your listed vans</h2>
                    <Link to="vans" className="text-base">View all</Link>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Await resolve={hostVans}>
                        {renderHostVans}
                    </Await>
                </Suspense>
            </section>
        </>
    )
}