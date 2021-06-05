let confirmation_open =document.getElementById('confirmation_open')
let clear_req_background = document.getElementById('clear_req_background')
let clear_confirmation_window = document.getElementById('clear_confirmation_window')
let close_clear_confirmation = document.getElementById('close_clear_confirmation')

let confirmation_send_order =document.getElementById('confirmation_send_order')
let send_req_background = document.getElementById('send_req_background')
let send_order_confirmation_window = document.getElementById('send_order_confirmation_window')
let close_send_order_confirmation = document.getElementById('close_send_order_confirmation')
let body_general = document.getElementById('body_general')

let item_cat_sum_array = []
let temp_item_cat_sum_array = []
let sum_input_val_array= []
let sum_array=[]

confirmation_open.addEventListener('click',(event)=>{
    event.preventDefault();
    clear_req_background.className = "clear_req_background_op"
    clear_confirmation_window.className = "clear_confirmation_op"
    clear_req_background.style = "display:inline"
    clear_confirmation_window.style= "display:inline"
    window.scrollTo(0,0)
    body_general.style = "overflow-y: hidden;"

})

clear_req_background.addEventListener('click',(event)=>{
    event.preventDefault();
    clear_req_background.className = "clear_req_background_cl"
    clear_confirmation_window.className = "clear_confirmation_cl"
    body_general.style = "overflow-y: scroll;"
})
close_clear_confirmation.addEventListener('click',(event)=>{
    event.preventDefault();
    clear_req_background.className = "clear_req_background_cl"
    clear_confirmation_window.className = "clear_confirmation_cl"
    body_general.style = "overflow-y: scroll;"
})
/**/ 
/*confirmation_send_order.addEventListener('click',(event)=>{
    event.preventDefault();
    send_req_background.className = "clear_req_background_op"
    send_order_confirmation_window.className = "clear_confirmation_op"
    send_req_background.style = "display:inline"
    send_order_confirmation_window.style= "display:inline"
    window.scrollTo(0,0)
    body_general.style = "overflow-y: hidden;"
})

send_req_background.addEventListener('click',(event)=>{
    event.preventDefault();
    send_req_background.className = "clear_req_background_cl"
    send_order_confirmation_window.className = "clear_confirmation_cl"
    body_general.style = "overflow-y: scroll;"
})
close_send_order_confirmation.addEventListener('click',(event)=>{
    event.preventDefault();
    send_req_background.className = "clear_req_background_cl"
    send_order_confirmation_window.className = "clear_confirmation_cl"
    body_general.style = "overflow-y: scroll;"
})*/

/*-----------------------------------------EDIT DISPLAY------------------------------------*/



let buttons_count = document.getElementById('buttons_count')
let display_0= document.getElementById('combodisplay0_0')
let display_1 = document.getElementById('combodisplay0_1')
let display_2 = document.getElementById('combodisplay0_2')
let display_3 = document.getElementById('combodisplay0_3')
let display_4 = document.getElementById('combodisplay0_4')
let active_product = document.getElementById('active_product')
let active_price = document.getElementById('active_price')
let cat_items = document.getElementById('cat_items')
let combo_title = document.getElementById('combo_title')
let combo_title_input = document.getElementById('combo_title_input')
let combo_prince_input = document.getElementById('combo_prince_input')
let submit_button = document.getElementById('submit_button')
let topbar = document.getElementById('topbar')
let sub_item_div_4 = document.getElementById('sub_item_div_4')
let confirm_modify = document.getElementById('confirm_modify')


let product_buttons_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    product_buttons_array.push(document.getElementById(`sc_prod_btn_${i}`))
}
let product_buttons_value_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    product_buttons_value_array.push(document.getElementById(`sc_prod_btn_value_${i}`))
}
let name_buttons_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    name_buttons_array.push(document.getElementById(`btn_men_name_${i}`))
}
console.log("nmb",name_buttons_array)
let descr_buttons_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    descr_buttons_array.push(document.getElementById(`btn_men_descr_${i+1}`))
}

let splited_items_array = []
for(let i = 0;i<cat_items.value;i++){
    splited_items_array.push(parseInt(document.getElementById(`${i}_item_cat_length`).value))
}







/*----------------------CLOSE TRIGGER BTN---------------------------------*/
display_0.addEventListener('click',(event)=>{
    event.preventDefault();
    topbar.style = "display:inline"
    display_0.className = "combodisplay_c_0_0_cl"
    display_1.className = "combodisplay_c_0_1_cl"
    display_2.className = "combodisplay_c_0_2_cl"
    display_3.className = "combodisplay_c_0_3_cl"
    display_4.className = "combodisplay_c_0_4_cl"
    body_general.style = "overflow-y: scroll"
    sub_item_div_4.style = "display:inherit"
    display_1.scrollTo(0,0)

    for(let x = 0;x<cat_items.value;x++){ 
        for(let i = 0;i<splited_items_array[x];i++){
            document.getElementById(`${x}_count_${i}`).value = 0
        }}
        for(let i = 0;i<cat_items.value;i++){
            sum_array.push(0)
        }
        sum_array = []
                for(let i = 0;i<cat_items.value;i++){
                    sum_array.push(0)
                }
                

})
/*----------------------CLOSE TRIGGER BACKGROUND---------------------------------*/
display_4.addEventListener('click',(event)=>{
    event.preventDefault();
    topbar.style = "display:inline"
    display_0.className = "combodisplay_c_0_0_cl"
    display_1.className = "combodisplay_c_0_1_cl"
    display_2.className = "combodisplay_c_0_2_cl"
    display_3.className = "combodisplay_c_0_3_cl"
    display_4.className = "combodisplay_c_0_4_cl"
    body_general.style = "overflow-y: scroll"
    sub_item_div_4.style = "display:inherit"
    display_1.scrollTo(0,0)
    for(let x = 0;x<cat_items.value;x++){ 
        for(let i = 0;i<splited_items_array[x];i++){
            document.getElementById(`${x}_count_${i}`).value = 0
        }}
        for(let i = 0;i<cat_items.value;i++){
            sum_array.push(0)
        }
        sum_array = []
                for(let i = 0;i<cat_items.value;i++){
                    sum_array.push(0)
                }
})





//-------------------------------UP ARROWS-------------------------
let upbtns_array = []
let upbtns_temp_array = []
for(let x = 0;x<cat_items.value;x++){ 
    for(let i = 0;i<splited_items_array[x];i++){
        upbtns_temp_array.push(document.getElementById(`${x}_uparrow_${i}`))
    }
    upbtns_array.push(upbtns_temp_array)
    upbtns_temp_array = []
}

//-------------------------------INPUT-------------------------
let input_array = []
let input_temp_array = []
for(let x = 0;x<cat_items.value;x++){ 
    for(let i = 0;i<splited_items_array[x];i++){
        input_temp_array.push(document.getElementById(`${x}_count_${i}`))
    }
    input_array.push(input_temp_array)
    input_temp_array = []
}

//-------------------------------DOWN ARROWS-------------------------
let downbtns_array = []
let downbtns_temp_array = []
for(let x = 0;x<cat_items.value;x++){ 
    for(let i = 0;i<splited_items_array[x];i++){
        downbtns_temp_array.push(document.getElementById(`${x}_downarrow_${i}`))
    }
    downbtns_array.push(downbtns_temp_array)
    downbtns_temp_array = []
}

//--------------------------------CLICK EVENT--------------------------------



for(let z = 0;z<cat_items.value;z++){ 
    for(let y = 0;y<splited_items_array[z];y++){
        temp_item_cat_sum_array.push(0)
    }
    item_cat_sum_array.push(temp_item_cat_sum_array)
    temp_item_cat_sum_array = []
}

for(let i = 0;i<cat_items.value;i++){
    sum_input_val_array.push(0)
}
for(let i = 0;i<cat_items.value;i++){
    sum_array.push(0)
}




for(let x = 0;x<cat_items.value;x++){ 
    for(let i = 0;i<splited_items_array[x];i++){
        upbtns_array[x][i].addEventListener('click',(event)=>{
            let cat_max_array = [] //valores de cantidad segun categoría de producto
            for(let i = 0;i<cat_items.value;i++){
            cat_max_array.push(document.getElementById(`prod_${active_product.value}_catitem_${i+1}`))
            }
            let cat_factor_array = []
            for(let i = 0;i<cat_items.value;i++){
                cat_factor_array.push(document.getElementById(`prod_${active_product.value}_catfactor_${i+1}`))
                }

            if(sum_array[x]<parseInt(cat_max_array[x].value)){
                sum_input_val_array = []
                 item_cat_sum_array =[]   
                 temp_item_cat_sum_array =[]
                 input_array[x][i].value = parseInt(input_array[x][i].value)+parseInt(cat_factor_array[x].value)
              
                for(let z = 0;z<cat_items.value;z++){ 
         
                    for(let y = 0;y<splited_items_array[z];y++){
             
                        temp_item_cat_sum_array.push(parseInt(input_array[z][y].value))
                    }
                  
                    item_cat_sum_array.push(temp_item_cat_sum_array)
                    temp_item_cat_sum_array = []
                }
               
               
      
                sum_array = []
            
                for(let g = 0;g<item_cat_sum_array.length;g++){
                    
                        sum_array.push(item_cat_sum_array[g].reduce((a, b) => parseInt(a) + parseInt(b)))
                    
                }
    
            }
        })
    }
}

for(let x = 0;x<cat_items.value;x++){ 
    for(let i = 0;i<splited_items_array[x];i++){
        downbtns_array[x][i].addEventListener('click',(event)=>{
            let cat_factor_array = []
            for(let i = 0;i<cat_items.value;i++){
                cat_factor_array.push(document.getElementById(`prod_${active_product.value}_catfactor_${i+1}`))
                }


            if(parseInt(input_array[x][i].value)>0){
                
                sum_input_val_array = []
                 item_cat_sum_array =[]   
                 temp_item_cat_sum_array =[]
                 input_array[x][i].value = parseInt(input_array[x][i].value)-parseInt(cat_factor_array[x].value)
              
                for(let z = 0;z<cat_items.value;z++){ 
         
                    for(let y = 0;y<splited_items_array[z];y++){
             
                        temp_item_cat_sum_array.push(parseInt(input_array[z][y].value))
                    }
                   
                    item_cat_sum_array.push(temp_item_cat_sum_array)
                    temp_item_cat_sum_array = []
                }
               
   
      
                sum_array = []
            
                for(let g = 0;g<item_cat_sum_array.length;g++){
                    
                        sum_array.push(item_cat_sum_array[g].reduce((a, b) => parseInt(a) + parseInt(b)))
                    
                }
                console.log("sum_array",sum_array)
            }
        })
    }
}

let sc_confirm_backscreen = document.getElementById("sc_confirm_backscreen")
let sc_confirm_window = document.getElementById('sc_confirm_window')
let sc_error_backscreen = document.getElementById('sc_error_backscreen')
let sc_error_tag = document.getElementById('sc_error_tag')
let sc_confirm_btn = document.getElementById("sc_confirm_btn")
let sc_back_btn = document.getElementById("sc_back_btn")


/*-------------------------------------PARA REVISION--------------------------*/
submit_button.addEventListener('click',(event)=>{
    event.preventDefault();
    let max_values_array = [] //valores de cantidad segun categoría de producto
    for(let i = 0;i<cat_items.value;i++){
        max_values_array.push(parseInt(document.getElementById(`prod_${active_product.value}_catitem_${i+1}`).value))
    }

    let count = []
    
    for(let i = 0;i<item_cat_sum_array.length;i++){
        count.push(item_cat_sum_array[i].reduce((a, b) => parseInt(a) + parseInt(b)))
    }
    
    console.log("max values",max_values_array)
    console.log("count",count)
    let joint_1 = max_values_array.reduce((a, b) => parseInt(a) + parseInt(b))
    let joint_2 = count.reduce((a, b) => parseInt(a) + parseInt(b))
    count = []
    if(joint_1 == joint_2){
        sc_confirm_backscreen.className = "sc_confirm_backscreen_op"
        sc_confirm_window.className = "sc_confirm_window_op"
        sc_confirm_backscreen.style = 'display: inline'
        sc_confirm_window.style = 'display: inline'
    }
    else{
        sc_error_backscreen.className = "sc_error_backscreen_op"
        sc_error_tag.className = "sc_error_tag_op"
        sc_error_backscreen.style = "display:inline"
        sc_error_tag.style = "display:inline"
        display_1.scrollTo(0,0)
    }
})

sc_error_backscreen.addEventListener('click',(event)=>{
    event.preventDefault();
    sc_error_backscreen.className = "sc_error_backscreen_cl"
        sc_error_tag.className = "sc_error_tag_cl"
        display_1.scrollTo(0,0)
})
sc_error_tag.addEventListener('click',(event)=>{
    event.preventDefault();
    sc_error_backscreen.className = "sc_error_backscreen_cl"
        sc_error_tag.className = "sc_error_tag_cl"
        display_1.scrollTo(0,0)
})

sc_confirm_backscreen.addEventListener('click',(event)=>{
    event.preventDefault();
        sc_confirm_backscreen.className = "sc_confirm_backscreen_cl"
        sc_confirm_window.className = "sc_confirm_window_cl"
        display_1.scrollTo(0,0)
})

sc_back_btn.addEventListener('click',(event)=>{
    event.preventDefault();
        sc_confirm_backscreen.className = "sc_confirm_backscreen_cl"
        sc_confirm_window.className = "sc_confirm_window_cl"
        display_1.scrollTo(0,0)
}) 


/*----------------SEND_ORDER---------------- */
//require('./javascript/functions.js')();



let send_order_background = document.getElementById('send_order_background')
let confirm_button = document.getElementById('confirm_button')
let send_order_form = document.getElementById('send_order_form')
let send_close_btn = document.getElementById('send_close_btn')
let send_order_ultimate = document.getElementById('send_order_ultimate')

confirmation_send_order.addEventListener('click',(event)=>{
    event.preventDefault();
    send_order_background.className = 'send_order_background_op'
    send_order_form.className = 'send_order_form_op'
    send_order_background.style = "display: inline"
    send_order_form.style = "display: inline"
    topbar.style = "display:none"
    window.scrollTo(0,0)
    body_general.style = "overflow-y: hidden"
})

send_order_background.addEventListener('click',(event)=>{
    event.preventDefault();
    send_order_background.className = 'send_order_background_cl'
    send_order_form.className = 'send_order_form_cl'
    topbar.style = "display:inline"
    body_general.style = "overflow-y: scroll"
})

send_close_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    send_order_background.className = 'send_order_background_cl'
    send_order_form.className = 'send_order_form_cl'
    sub_item_div_4.style = "display:inline"
    body_general.style = "overflow-y: scroll"
})
/*------------confirmation window for sending order-----------------------*/
send_order_ultimate.addEventListener('click',(event)=>{
    event.preventDefault();
    send_req_background.style = "display: inline"
    send_order_confirmation_window.style = "display: inline"
    send_req_background.className = "send_req_background_op"
    send_order_confirmation_window.className = "send_order_confirmation_op"
    window.scrollTo(0,0)
    body_general.style = "overflow-y: hidden"

})

send_req_background.addEventListener('click',(event)=>{
    event.preventDefault();
    send_req_background.className = "send_req_background_cl"
    send_order_confirmation_window.className = "send_order_confirmation_cl"
    body_general.style = "overflow-y: scroll"
})
close_send_order_confirmation.addEventListener('click',(event)=>{
    event.preventDefault();
    send_req_background.className = "send_req_background_cl"
    send_order_confirmation_window.className = "send_order_confirmation_cl"
    body_general.style = "overflow-y: scroll"
})

/*--------------BUTTONS-----------------------------*/
let card_btn = document.getElementById('card_btn')
let pago_link_btn = document.getElementById('pago_link_btn')
let yape_btn = document.getElementById('yape_btn')
let plin_btn = document.getElementById('plin_btn')
let bcp_transfer_btn = document.getElementById('bcp_transfer_btn')
let bbva_transfer_btn = document.getElementById('bbva_transfer_btn')
let selected_payment_type_input = document.getElementById('selected_payment_type_input')
let selected_payment_type_show = document.getElementById('selected_payment_type_show')

card_btn.addEventListener("click",(event=>{
    event.preventDefault();
    if(card_btn.className == "btn_up"){
        card_btn.className = "btn_p"
        pago_link_btn.className = "btn_up" 
        yape_btn.className = "btn_up" 
        plin_btn.className = "btn_up"
        bcp_transfer_btn.className = "btn_up"
        bbva_transfer_btn.className = "btn_up"
        selected_payment_type_input.value = "POS con tarjeta"
        selected_payment_type_show.innerHTML = "POS con tarjeta"
    }
}))

pago_link_btn.addEventListener("click",(event=>{
    event.preventDefault();
    if(pago_link_btn.className == "btn_up"){
        card_btn.className = "btn_up"
        pago_link_btn.className = "btn_p" 
        yape_btn.className = "btn_up" 
        plin_btn.className = "btn_up"
        bcp_transfer_btn.className = "btn_up"
        bbva_transfer_btn.className = "btn_up"
        selected_payment_type_input.value = "Pagolink de Niubiz"
        selected_payment_type_show.innerHTML = "Pagolink de Niubiz"
    }
}))

yape_btn.addEventListener("click",(event=>{
    event.preventDefault();
    if(yape_btn.className == "btn_up"){
        card_btn.className = "btn_up"
        pago_link_btn.className = "btn_up" 
        yape_btn.className = "btn_p" 
        plin_btn.className = "btn_up"
        bcp_transfer_btn.className = "btn_up"
        bbva_transfer_btn.className = "btn_up"
        selected_payment_type_input.value = "Yape"
        selected_payment_type_show.innerHTML = "Yape"
    }
}))

plin_btn.addEventListener("click",(event=>{
    event.preventDefault();
    if(plin_btn.className == "btn_up"){
        card_btn.className = "btn_up"
        pago_link_btn.className = "btn_up" 
        yape_btn.className = "btn_up" 
        plin_btn.className = "btn_p"
        bcp_transfer_btn.className = "btn_up"
        bbva_transfer_btn.className = "btn_up"
        selected_payment_type_input.value = "Plin"
        selected_payment_type_show.innerHTML = "Plin"
    }
}))

bcp_transfer_btn.addEventListener("click",(event=>{
    event.preventDefault();
    if(bcp_transfer_btn.className == "btn_up"){
        card_btn.className = "btn_up"
        pago_link_btn.className = "btn_up" 
        yape_btn.className = "btn_up" 
        plin_btn.className = "btn_up"
        bcp_transfer_btn.className = "btn_p"
        bbva_transfer_btn.className = "btn_up"
        selected_payment_type_input.value = "Transferencia BCP"
        selected_payment_type_show.innerHTML = "Transferencia BCP"
    }
}))

bbva_transfer_btn.addEventListener("click",(event=>{
    event.preventDefault();
    if(bbva_transfer_btn.className == "btn_up"){
        card_btn.className = "btn_up"
        pago_link_btn.className = "btn_up" 
        yape_btn.className = "btn_up" 
        plin_btn.className = "btn_up"
        bcp_transfer_btn.className = "btn_up"
        bbva_transfer_btn.className = "btn_p"
        selected_payment_type_input.value = "Transferencia BBVA"
        selected_payment_type_show.innerHTML = "Transferencia BBVA"
    }
}))

let receive_now_btn = document.getElementById('receive_now_btn')
let receive_later_btn = document.getElementById('receive_later_btn')
let selected_receive_type_input = document.getElementById('selected_receive_type_input')
let selected_receive_type_show = document.getElementById('selected_receive_type_show')
let date_picker_content = document.getElementById('date_picker_content')
let date_picker_background = document.getElementById('date_picker_background')
let date_picker_back_btn = document.getElementById('date_picker_back_btn')

receive_now_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(receive_now_btn.className == "btn_up"){
        receive_now_btn.className = "btn_p"
        receive_later_btn.className = "btn_up"
        selected_receive_type_input.value = "Lo antes posible"
        selected_receive_type_show.innerHTML = "Lo antes posible"
    }
})
receive_later_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(receive_later_btn.className == "btn_up"){
        receive_now_btn.className = "btn_up"
        receive_later_btn.className = "btn_p"
        date_picker_content.style= "display: inline"
        date_picker_background.style = "display: inline"
        date_picker_content.className = "date_picker_content_op"
        date_picker_background.className = "date_picker_background_op"
    }
})
date_picker_background.addEventListener('click',(event)=>{
    event.preventDefault();
    date_picker_content.className = "date_picker_content_cl"
    date_picker_background.className = "date_picker_background_cl"
    receive_later_btn.className = "btn_up"
})
date_picker_back_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    date_picker_content.className = "date_picker_content_cl"
    date_picker_background.className = "date_picker_background_cl"
    receive_later_btn.className = "btn_up"
})

let delivery_btn = document.getElementById('delivery_btn')
let to_adress_btn = document.getElementById('to_adress_btn')
let selected_order_send_type = document.getElementById('selected_order_send_type')

delivery_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(delivery_btn.className == "btn_up"){
        delivery_btn.className = "btn_p"
        to_adress_btn.className = "btn_up"
        selected_order_send_type.innerHTML = ""
    }
})
to_adress_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(to_adress_btn.className == "btn_up"){
        delivery_btn.className = "btn_up"
        to_adress_btn.className = "btn_p"
        selected_order_send_type.innerHTML = "Recojo en el local"
    }
})

/*----------------------OPENING TRIGGER---------------------------------*/
for (let i = 0;i<product_buttons_array.length;i++){
    product_buttons_array[i].addEventListener('click',(event)=>{

    topbar.style = "display:none"
    active_product.value = product_buttons_value_array[i].value;
    combo_title.innerHTML = name_buttons_array[i].value
    combo_title_input.value = name_buttons_array[i].value
    sub_item_div_4.style = "display:none"
    body_general.style = "overflow-y: hidden"
    confirm_modify.formAction = `/mod_product_confirm/${i}`
    window.scrollTo(0,0)
    let cat_items_array = [] //valores de cantidad segun categoría de producto
    for(let i = 0;i<cat_items.value;i++){
        cat_items_array.push(document.getElementById(`prod_${active_product.value}_catitem_${i+1}`))
    }
    

   let cat_name_array = [] //nombres de categorías
    for(let i = 0;i<cat_items_array.length;i++){
            cat_name_array.push(document.getElementById(`cat_items_name_${i}`))
    }
    let cat_active_name_array = [] //artículo de menú flotante
    for(let i = 0;i<cat_name_array.length;i++){
       cat_active_name_array.push(document.getElementById(`${cat_name_array[i].value}show`))
    }
    for(let i = 0;i<cat_active_name_array.length;i++){
        if (cat_items_array[i].value>0){
            cat_active_name_array[i].style = "display: inline"
        }
        else{
            cat_active_name_array[i].style = "display: none"
        }
    }

let active_product_array = []
for (let i = 0;i<buttons_count.value;i++){
    active_product_array.push(document.getElementById(`prod_id_${i}`).value)
}


let prod_sel_cant_array = []
for(let a = 0;a<buttons_count.value;a++){
    for(let x = 0;x<cat_items.value;x++){ 
        for(let i = 0;i<splited_items_array[x];i++){
            prod_sel_cant_array.push(document.getElementById(`prod_sel_cant_${active_product_array[a]}_${x}_${i}`))
        }
    }
}
console.log(prod_sel_cant_array)

for(let x = 0;x<cat_items.value;x++){ 
    for(let i = 0;i<splited_items_array[x];i++){
        document.getElementById(`${x}_count_${i}`).value = document.getElementById(`prod_sel_cant_${active_product.value}_${x}_${i}`).value
    }
}
sum_array = [999]





    event.preventDefault();
    display_0.className = "combodisplay_c_0_0_op"
    display_1.className = "combodisplay_c_0_1_op"
    display_2.className = "combodisplay_c_0_2_op"
    display_3.className = "combodisplay_c_0_3_op"
    display_4.className = "combodisplay_c_0_4_op"
    display_0.style = "display: inline"
    display_1.style = "display: inline"
    display_2.style = "display: inline"
    display_3.style = "display: inline"
    display_4.style = "display: inline"


            for(let i = 0;i<cat_items.value;i++){
                max_val = document.getElementById(`prod_${active_product.value}_catitem_${i+1}`).value
                item_name = cat_name_array[i].value
            
                    document.getElementById(`counter_${i}`).innerHTML = `Elige tus ${item_name} (Máximo ${max_val})`

            
            }
      
            item_cat_sum_array =[]   
            temp_item_cat_sum_array =[]
        
            for(let z = 0;z<cat_items.value;z++){ 
                 
                for(let y = 0;y<splited_items_array[z];y++){
         
                    temp_item_cat_sum_array.push(parseInt(input_array[z][y].value))
                }
              
                item_cat_sum_array.push(temp_item_cat_sum_array)
                temp_item_cat_sum_array = []
            }
            sum_array = []
                    
            for(let g = 0;g<item_cat_sum_array.length;g++){
                
                    sum_array.push(item_cat_sum_array[g].reduce((a, b) => parseInt(a) + parseInt(b)))
                
            }
            for(let i = 0;i<item_cat_sum_array.length;i++){
                count.push(item_cat_sum_array[i].reduce((a, b) => parseInt(a) + parseInt(b)))
            }

    })
    
}