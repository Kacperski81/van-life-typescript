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
}