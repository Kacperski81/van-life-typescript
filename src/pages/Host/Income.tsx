export function Income() {
    const transactionsData = [
        { amount: 720, date: "3/1/23", id: "1" },
        { amount: 560, date: "12/12/22", id: "2" },
        { amount: 980, date: "3/12/22", id: "3" },
    ]

    return (
        <>
            <section className="px-2 text-base">
                <h2 className="text-4xl mb-4">Income</h2>
                <p className="text-base mb-4">Last <span className="font-bold underline">30 days</span></p>
                <h2 className="font-extrabold text-5xl mb-4">$2,260</h2>
                <div className="mb-4">
                    <img src="/income-graph.png" alt="Income graph" className="p-0" />
                </div>
                <div className="flex m-4 py-4">
                    <h3 className="grow text-2xl font-bold">Your transactions ({transactionsData.length})</h3>
                    <p>Last <span className="font-bold underline">30 days</span></p>
                </div>
                <div>
                    {transactionsData.map((transaction) => {
                        return (
                            <div key={transaction.id} className="flex justify-between p-4 bg-white m-2 rounded-lg items-center">
                                <p className="text-4xl font-semibold">${transaction.amount}</p>
                                <p className="text-xl">{transaction.date}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}