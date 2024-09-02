import { getUser, getTransactions } from "./api"
import { UserState, Error } from "./types"

export async function loginAction(obj: {request: Request, params: object}): Promise<UserState | Error>{
    const formData = await obj.request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const creds = {email, password}

    // const pathname = new URL(obj.request.url).pathname
    // console.log(pathname)
    try {
        const user = await getUser(creds)
        // console.log("User: ", user)
        const transactions = await getTransactions(user.user.id)
        console.log("Transactions: ", transactions)
        // const vans = await getHostVans(user.user.id)
        // localStorage.setItem('isLoggedIn', 'true')
        return {
            // userName: user.user.name,
            // email: user.user.email,
            // userId: user.user.id,
            // isLoggedIn: true,
            incomeDays: 0,
            user: {
                userName: user.user.name,
                email: user.user.email,
                userId: user.user.id,
                isLoggedIn: true,
            },
            transactions: transactions,
            // vans: vans,
            dispatch: () => {}
        } 
    }
    catch (error) {
        console.log("Error: ", error)
        return error as Error 
    }

}