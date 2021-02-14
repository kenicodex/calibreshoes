var cart = []
export function store() {
    let put = JSON.stringify(cart)
    sessionStorage.setItem("cart", put)
}
export function add(newItem,index) {
    let instore = sessionStorage.getItem("cart") 
    instore = JSON.parse(instore)
    if(sessionStorage.getItem(`carted-item${index}`) === null){
        sessionStorage.setItem(`carted-item${index}`,true)
        if (instore === null) {
            cart.push(newItem)
            store();
            console.log("from the beginning " + cart );
            // alert("empty but new value is " + sessionStorage.getItem("cart"))
        }else if(cart.length > 0){
            cart.push(newItem)
            store();
            console.log("added newitem when cart len  = 0 <->" + cart);
        }else if(cart.length === 0){
            cart = JSON.parse(sessionStorage.getItem("cart"))
            cart.push(newItem)
            store();
            console.log("cart is now empty "+ cart + " and len is " + cart.length);
        }
    }

}