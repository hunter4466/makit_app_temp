let nav_btn_products = document.getElementById('nav_btn_products')
let nav_btn_customers = document.getElementById('nav_btn_customers')
let nav_btn_orders = document.getElementById('nav_btn_orders')
let products_main_content_div = document.getElementById('products_main_content_div')
let customers_main_content_div = document.getElementById('customers_main_content_div')
let orders_main_content_div = document.getElementById('orders_main_content_div')


nav_btn_products.addEventListener('click',(event)=>{
    event.preventDefault();
    products_main_content_div.style = "display:inline"
    customers_main_content_div.style = "display:none"
    orders_main_content_div.style = "display:none"
})

nav_btn_customers.addEventListener('click',(event)=>{
    event.preventDefault();
    products_main_content_div.style = "display:none"
    customers_main_content_div.style = "display:inline"
    orders_main_content_div.style = "display:none"
})

nav_btn_orders.addEventListener('click',(event)=>{
    event.preventDefault();
    products_main_content_div.style = "display:none"
    customers_main_content_div.style = "display:none"
    orders_main_content_div.style = "display:inline"
})

