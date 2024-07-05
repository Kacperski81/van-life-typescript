export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

export async function requireAuth() {
    const isLoggedIn = JSON.parse(localStorage.getItem('vanLife') || 'false')
    // console.log(str)
    if (!isLoggedIn) {
        throw {
            redirect: "/login",
        }
    }
    // console.log(isLoggedIn)
    return isLoggedIn
}
