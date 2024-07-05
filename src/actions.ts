import { getUser } from "./api"
import { userType, errorType } from "./types"

export async function loginAction(obj: {request: Request, params: object}): Promise<userType | errorType>{
    const formData = await obj.request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const creds = {email, password}

    // const pathname = new URL(obj.request.url).pathname
    // console.log(pathname)
    try {
        const user = await getUser(creds)
        console.log(user)
        // localStorage.setItem('isLoggedIn', 'true')
        return {
            userName: user.user.name,
            email: user.user.email,
            userId: user.user.id,
            isLoggedIn: true
        } 
    }
    catch (error) {
        console.log("Error: ", error)
        return error as errorType 
    }

}