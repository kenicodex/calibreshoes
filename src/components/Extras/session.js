export const
    isLoggedin = (redirect) => {
        let session = localStorage.getItem("log")
        if (session) {
            if (window.location.pathname !== "/admin") {
                window.location.assign("/admin")
            }
        } else if (!session) {
            if (window.location.pathname !== "admin") {
                window.location.assign('/login')
            } 
        } else {
            localStorage.setItem("log", false)
        }
    },
    log = (bool) => {
        localStorage.setItem("log", bool)
    }
