export const
    isLoggedin = (redirect) => {
        let session = localStorage.getItem("log")
        if (session) {
            if (window.location.pathname !== "/admin") {
                window.location.assign("/admin")
            }
        } else if (!session) {
            if (window.location.pathname === "/admin") {
                window.location.assign('/login')
            } 
        } else if (session === null){
            localStorage.setItem("log", false)
            if (window.location.pathname === "/admin") {
                window.location.assign('/login')
            } 
        }
    },
    log = (bool) => {
        localStorage.setItem("log", bool)
    }
