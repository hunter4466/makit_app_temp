let buttons_count = document.getElementById('buttons_count')
let display_0= document.getElementById('combodisplay0_0')
let display_1 = document.getElementById('combodisplay0_1')
let display_2 = document.getElementById('combodisplay0_2')
let display_3 = document.getElementById('combodisplay0_3')
let display_4 = document.getElementById('combodisplay0_4')
let display_5 = document.getElementById('combodisplay0_5')
let active_product = document.getElementById('active_product')
let active_price = document.getElementById('active_price')
let cat_items = document.getElementById('cat_items')
let combo_title = document.getElementById('combo_title')
let combo_title_input = document.getElementById('combo_title_input')
let combo_prince_input = document.getElementById('combo_prince_input')
let submit_button = document.getElementById('submit_button')
let menu_back_btn_id = document.getElementById('menu_back_btn_id')
let body_general = document.getElementById('body_general')
let single_prod_name = document.getElementById('single_prod_name')
let single_display_background = document.getElementById('single_display_background')
let single_display = document.getElementById('single_display')
let sprod_price_input = document.getElementById('sprod_price_input')
let sprod_name_input = document.getElementById('sprod_name_input')
let active_product2 = document.getElementById('active_product2')
let singlep_up_arrow = document.getElementById('singlep_up_arrow')
let singlep_down_arrow = document.getElementById('singlep_down_arrow')
let single_prod_input = document.getElementById('single_prod_input')

singlep_up_arrow.addEventListener('click',(event)=>{
    event.preventDefault();
    if(single_prod_input.value <10){
        single_prod_input.value++
    }
})
singlep_down_arrow.addEventListener('click',(event)=>{
    event.preventDefault();
    if(single_prod_input.value>0){
        single_prod_input.value--
    }
})

single_display_background.addEventListener('click',(event)=>{
    event.preventDefault();

    single_display_background.className = "single_display_background_cl"
    single_display.className = "single_display_cl"
})


let product_buttons_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    product_buttons_array.push(document.getElementById(`producto${i+1}btn`))
}
let product_buttons_array_id2 = [] 
for (let i = 0;i<buttons_count.value;i++){
    product_buttons_array_id2.push(document.getElementById(`producto${i+1}btn_id2`))
}
let name_buttons_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    name_buttons_array.push(document.getElementById(`btn_men_name_${i+1}`))
}

let descr_buttons_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    descr_buttons_array.push(document.getElementById(`btn_men_descr_${i+1}`))
}
let price_buttons_array = [] 
for (let i = 0;i<buttons_count.value;i++){
    price_buttons_array.push(document.getElementById(`btn_men_price_${i+1}`))
}




for (let i = 0;i<product_buttons_array.length;i++){
    product_buttons_array[i].addEventListener('click',(event)=>{
    if(product_buttons_array_id2[i].value == "multiple"){
    active_product.value = product_buttons_array[i].value;
    combo_title.innerHTML = name_buttons_array[i].value
    combo_title_input.value = name_buttons_array[i].value
    combo_prince_input.value = parseFloat(price_buttons_array[i].value).toFixed(2)
    body_general.style = "overflow-y: hidden"
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
    let counter_items_array = [] //artículo de menú flotante
    for(let i = 0;i<cat_name_array.length;i++){
        counter_items_array.push(document.getElementById(`counter_item_${i}`))
    }
    for(let i = 0;i<cat_active_name_array.length;i++){
        if (cat_items_array[i].value>0){
            cat_active_name_array[i].style = "display: inline"
            counter_items_array[i].style = "display: inline"
        }
        else{
            cat_active_name_array[i].style = "display: none"
            counter_items_array[i].style = "display: none"
        }
    }
    event.preventDefault();
    display_0.className = "combodisplay_c_0_0_op"
    display_1.className = "combodisplay_c_0_1_op"
    display_2.className = "combodisplay_c_0_2_op"
    display_3.className = "combodisplay_c_0_3_op"
    display_4.className = "combodisplay_c_0_4_op"
    display_5.className = "combodisplay_c_0_5_op"
    display_0.style = "display: inline"
    display_1.style = "display: inline"
    display_2.style = "display: inline"
    display_3.style = "display: inline"
    display_4.style = "display: inline"
    display_5.style = "display: flex"
    menu_back_btn_id.className = "menu_back_btn_cl"

            for(let i = 0;i<cat_items.value;i++){
                max_val = document.getElementById(`prod_${active_product.value}_catitem_${i+1}`).value
                item_name = cat_name_array[i].value
            
                    document.getElementById(`counter_${i}`).innerHTML = `Elige tus ${item_name} (Máximo ${max_val})`

            
            }
      
    
        }
        else{
            single_prod_name.innerHTML = name_buttons_array[i].value
            sprod_name_input.value = name_buttons_array[i].value
            sprod_price_input.value = parseFloat(price_buttons_array[i].value).toFixed(2)
            single_display_background.style = "display:inline"
            single_display_background.className = "single_display_background_op"
            single_display.style = "display:inline"
            single_display.className = "single_display_op"
            active_product2.value = product_buttons_array[i].value;
            


            console.log(name_buttons_array[i].value)
                console.log(descr_buttons_array[i].value)
                    console.log(price_buttons_array[i].value)
                
        }
    }
    
    
    )
}

display_0.addEventListener('click',(event)=>{
    event.preventDefault();
    display_0.className = "combodisplay_c_0_0_cl"
    display_1.className = "combodisplay_c_0_1_cl"
    display_2.className = "combodisplay_c_0_2_cl"
    display_3.className = "combodisplay_c_0_3_cl"
    display_4.className = "combodisplay_c_0_4_cl"
    display_5.className = "combodisplay_c_0_5_cl"
    body_general.style = "overflow-y: scroll"
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
                menu_back_btn_id.className = "menu_back_btn_op"

})
display_4.addEventListener('click',(event)=>{
    event.preventDefault();
    display_0.className = "combodisplay_c_0_0_cl"
    display_1.className = "combodisplay_c_0_1_cl"
    display_2.className = "combodisplay_c_0_2_cl"
    display_3.className = "combodisplay_c_0_3_cl"
    display_4.className = "combodisplay_c_0_4_cl"
    display_5.className = "combodisplay_c_0_5_cl"
    body_general.style = "overflow-y: scroll"
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
                menu_back_btn_id.className = "menu_back_btn_op"

})



let splited_items_array = []

for(let i = 0;i<cat_items.value;i++){
    splited_items_array.push(parseInt(document.getElementById(`${i}_item_cat_length`).value))
}



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
let item_cat_sum_array = []
let temp_item_cat_sum_array = []
let sum_input_val_array= []
let sum_array=[]


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
let new_try_var = "nothing"
/*------to commit 1--to commit 2---*/
submit_button.addEventListener('click',(event)=>{
    event.preventDefault();
    let max_values_array = [] //valores de cantidad segun categoría de producto
    for (let i = 0;i<cat_items.value;i++){
        max_values_array.push(parseInt(document.getElementById(`prod_${active_product.value}_catitem_${i+1}`).value))
                }
    let count = []
    for (let i = 0;i<item_cat_sum_array.length;i++){
        count.push(item_cat_sum_array[i].reduce((a, b) => parseInt(a) + parseInt(b)))
    }
    
    console.log("max values",max_values_array)
    console.log("count",count)
    let joint_1 = max_values_array.reduce((a, b) => parseInt(a) + parseInt(b))
    let joint_2 = count.reduce((a, b) => parseInt(a) + parseInt(b))
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
    event.preventDefault;
    sc_error_backscreen.className = "sc_error_backscreen_cl"
        sc_error_tag.className = "sc_error_tag_cl"
        display_1.scrollTo(0,0)
})
sc_error_tag.addEventListener('click',(event)=>{
    event.preventDefault;
    sc_error_backscreen.className = "sc_error_backscreen_cl"
        sc_error_tag.className = "sc_error_tag_cl"
        display_1.scrollTo(0,0)
})

sc_confirm_backscreen.addEventListener('click',(event)=>{
    event.preventDefault;
        sc_confirm_backscreen.className = "sc_confirm_backscreen_cl"
        sc_confirm_window.className = "sc_confirm_window_cl"
        display_1.scrollTo(0,0)
})

sc_back_btn.addEventListener('click',(event)=>{
    event.preventDefault;
        sc_confirm_backscreen.className = "sc_confirm_backscreen_cl"
        sc_confirm_window.className = "sc_confirm_window_cl"
        display_1.scrollTo(0,0)
}) 
