import { getUser, getTransactions, getHostVans, getReviews } from "./api"
import { Error } from "./types"

// export async function loginAction(obj: {request: Request, params: object}): Promise<UserState | Error>{
export async function loginAction() {
    // const formData = await obj.request.formData()
    const email = "b@b.com" as string
    const password = "w123" as string
    const creds = {email, password}

    // const pathname = new URL(obj.request.url).pathname
    // console.log(pathname)
    try {
        const user = await getUser(creds)
        const transactions = await getTransactions(user.id)
        const vans = await getHostVans(user.id)
        const reviews = await getReviews(user.id)
        sessionStorage.setItem('isLoggedIn', 'true')
        return {
            // userName: user.user.name,
            // email: user.user.email,
            // userId: user.user.id,
            // isLoggedIn: true,
            incomeDays: 0,
            reviewsDays: 0,
            dashboardDays: 0,
            vanType: "allVans",
            user: {
                userName: user.name,
                email: user.email,
                userId: user.id,
                isLoggedIn: true,
            },
            transactions: transactions,
            userVans: vans,
            reviews: reviews,
            // dispatch: () => {}
        } 
    }
    catch (error) {
        console.log("Error: ", error)
        return error as Error 
    }

}