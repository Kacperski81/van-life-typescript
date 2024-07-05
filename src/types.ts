export interface vanType {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    type: string
    hostId: string
}

export type errorType =  { 
    message: string
    statusText: string
    status: number
    headers?: {
        map: {
            location: string
        }
    }
}

export type credsInputType = {
    email: string
    password: string
}

export type credsType = {
    user: {
        email: string
        name: string
        id: string
    }
}

export type userType = {
    userName: string
    email: string,
    userId: string,
    isLoggedIn: boolean
}