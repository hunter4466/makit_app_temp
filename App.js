    /*installed express, nodemon, ejs, body-parser, express-flash, express-session, cookie parser*/
/*---------------------------LIBRERIAS----------------------------------------*/
const express = require('express')
const session = require('express-session')
const mysql = require('mysql')
const app = express()
const queryString = require('query-string')
const { facebook_api_key } = require('./configuration/config')
const { response } = require('express')
const { render } = require('ejs')

/*---------------------------USOS----------------------------------------*/
app.set('view engine', 'ejs')
app.set('views',  './views');
app.use(session({ secret: 'token-muy-secreto', key: 'sid', resave: true, saveUninitialized: true }));
app.use(express.json());
app.use(express.urlencoded()); 
app.use(express.static("public"))


/*---------------------------CONEXIONES----------------------------------------*/
var pool = mysql.createPool({  
connectionLimit: 1000,  
host:'localhost',
user: 'root',
password: 'jf7l2p93li',
database: 'makit_software',
multipleStatements: 'true'}) 

/*var pool = mysql.createPool({  
    connectionLimit: 1000,  
    host:'173.201.183.152',
    user: 'makit_app',
    password: 'jf7l2p93li',
    database: 'makit_software',
    multipleStatements: 'true'}) */

var pool_orders = mysql.createPool({  
    connectionLimit: 20,   
    host:'35.224.29.76',
    user: 'mariochois4466',
    password: 'jf7l2p93li',
    database: 'Clients_orders',
    multipleStatements: 'true'})
/*---------------------------MAILER----------------------------------------*
/*---------------------------MESSAGEBIRD-------------------------*/

/*---------------------------INICIO DE SESION----------------------------------------*/

app.all('/',(ask,ans)=>{
    ask.session.user_id = "1"
    ask.session.destroy();
            ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
                                        message2:'¡Créala ya mismo!',
                                        nameval:"",
                                        lnameval:"",
                                        telval:"",
                                        pw1val:"",
                                        pw2val:""})
                                        
     
})
app.all('/start_order',(ask,ans)=>{
    ask.session.user_sc1 = []
                    ask.session.user_sc2 = []
                    ask.session.user_sc3 = []
    ans.redirect('/firstmenulist1closetopslide')
})
/*---------------------------------CARTA MAKIT------------------------*/
app.all('/carta',(ask,ans)=>{
    ans.render('cartamakit')
})
app.all('/links',(ask,ans)=>{
    ans.render('links')
})

/*----------------------------------------------BOTONES DE NAVEGACIÓN DE TOP MENU------------------------------------------------------------------*/ 
/*-----------------Home----------------------------------*/ 
app.all('/firsthomeclosetopslide',(ask,ans)=>{
    ans.redirect('/')
})
/*-----------------Shopping cart----------------------------------*/

app.all('/firstspclosetopslide',(ask,ans)=>{

    let catarray = []
        
    pool.getConnection((err,conn)=>{ 
            const querya = "SELECT * FROM categoriaitems"
            conn.query(querya,(error,filas,campos)=>{
                if(error){throw error}
                    for(let i = 0;i<filas.length;i++){
                    catarray.push(i)  
                    }})
                    conn.release()
               
                    
                    pool.getConnection((err,conn)=>{ 
                            
                                    
                                    let queryarr =[] //"SELECT * FROM productos WHERE state = 'active'"
                                    let orderarr =[0,1,2,3,4,5]
                                    
                                    const query1 = `SELECT * FROM productos`
                                    const query2 = "SELECT * FROM categoriaitems"
                                    const query3 = "SELECT * FROM productos_categoriaitems"
                                    const query4 = "SELECT * FROM items"
                                    const query5 = "SELECT * FROM productos"
                                    const query6 = "SELECT * FROM productos"
                                    for(let i = 0;i<catarray.length;i++){
                                        queryarr.push(`SELECT * FROM items WHERE idcategoriaitems = ${i+1}`)
                                        orderarr.push(i+6)
                                    }
                               
                                    
                                    conn.query(`${query1};${query2};${query3};${query4};${query5};${query6};${queryarr.join(";")}`,orderarr,(error,filas,campos)=>{
                                        if(error) throw error
                                        let refmap = {}
                                        refmap["user_id"] = ask.session.user_id
                                        refmap["productos"] = filas[0]
                                        refmap["categoriaitems"] = filas[1]
                                        refmap["productos_categoriaitems"] = filas[2]
                                        refmap["items"] = filas[3]
                                        refmap["productos_whole"] = filas[4]
                                        refmap['user_id'] = ask.session.user_id
                                        refmap['prod_name'] = ask.session.user_sc1
                                        refmap['prod_price'] = ask.session.user_sc2
                                        refmap['user_adress_list'] = filas[5]
                                        let content_array = []
                                        for(let i = 0;i<catarray.length;i++){
                                            content_array.push(filas[i+6])
                                        }
                                        refmap["splited_items"] = content_array
                                        conn.release()
                                        ans.render('shoppingcart',refmap)
                                        
                              
            })})
        })
})

app.all('/fillshoppingcart',(ask,ans)=>{

        let user_sc_array1 = ask.session.user_sc1
        let user_sc_array2 = ask.session.user_sc2
        user_sc_array2.push(parseFloat(ask.body.combo_price).toFixed(2))
        temp_array = []
       temp_array.push([ask.body.combo_name])
       sub_temp_array_1 = []
       for(let i = 0;i<ask.body.cat_items.length;i++){
        sub_temp_array_1.push([ask.body.cat_items[i]])
       }
       temp_array.push(sub_temp_array_1)

       sub_temp_array_2 = []
       sub_temp_array_3 =[]
       sub_temp_array_4 =[]
       sub_temp_array_5 =[]

       item_name = ask.body.item_name
       let stage = 0
       let sum_stages = parseInt(ask.body.items_cat_length[stage])
      for(let i=0;i<item_name.length;i++){
          sub_temp_array_3.push([ask.body.item_name[i]])
          sub_temp_array_5.push([ask.body.item_cant[i]])
  
          if(i == sum_stages-1){
            sub_temp_array_2.push(sub_temp_array_3)
            sub_temp_array_4.push(sub_temp_array_5)
            sub_temp_array_3 = []
            sub_temp_array_5 = []
            sum_stages = parseInt(sum_stages)+parseInt(ask.body.items_cat_length[stage+1])
            stage++
          }
        }
       
       temp_array.push(sub_temp_array_2)
       temp_array.push(sub_temp_array_4)
       temp_array.push(ask.body.active_product)
       temp_array.push('multiple')
       user_sc_array1.push(temp_array)
        ask.session.user_sc1 = user_sc_array1
        ask.session.user_sc2 = user_sc_array2
        console.log("aosdjksad",user_sc_array1)
        console.log("aosdjksad2",user_sc_array2)
                ans.redirect('/firstspclosetopslide',)

})

app.all('/fillshoppingcart2',(ask,ans)=>{
        temp_array = ask.session.user_sc1
        temp_array.push([[`${ask.body.sprod_name_input} x ${ask.body.single_prod_input_cant}`],[[0]],[[0]],[[0]],ask.body.active_product2,'single'])
        ask.session.user_sc1 = temp_array
        temp_array2 = ask.session.user_sc2
        temp_array2.push(parseFloat(ask.body.sprod_price_input*ask.body.single_prod_input_cant).toFixed(2))
        ask.session.user_sc2 = temp_array2
        ans.redirect('/firstspclosetopslide',)
})

app.all('/mod_product_confirm/:id',(ask,ans)=>{

        console.log('before',ask.session.user_sc1[ask.params.id][3])
    ask.session.user_sc1[ask.params.id][3] = []
    console.log('after',ask.session.user_sc1[ask.params.id][3])
    console.log('tested value',ask.session.user_sc1[ask.params.id][3])
    let new_values = ask.body.item_cant
    let items_count = ask.body.items_cat_length
    let stage = 0
    let temp_array= []
    let sub_temp_array = []
    let sum_stages = parseInt(items_count[stage])
    console.log('new_values',new_values)
    for(let i = 0;i<new_values.length;i++){
            sub_temp_array.push(new_values[i])
        if(i==sum_stages-1){
            temp_array.push(sub_temp_array)
            sub_temp_array = []
            sum_stages = sum_stages+parseInt(items_count[stage+1])
            stage++
        }
    }
    console.log('temp_array',temp_array)
    for(let z = 0;z<temp_array.length;z++){
        ask.session.user_sc1[ask.params.id][3].push(temp_array[z])
    }
    console.log('after_procedure',ask.session.user_sc1[ask.params.id][3])
    ans.redirect('/firstspclosetopslide',)
})

app.all('/clear_sc',(ask,ans)=>{

        ask.session.user_sc1 = []
        ask.session.user_sc2 = []
        ans.redirect('/firstspclosetopslide',)
})
app.all('/send_order',(ask,ans)=>{
        let order = ask.session.user_sc1
        let string_Array = []
        let sum_array = []
        for(let i = 0;i<order.length;i++){
           let temp_array = []
            for(let a = 0;a<order[i][1].length;a++){
               let sub_temp_arr = []
                for(let b = 0;b<order[i][2][a].length;b++){
                    sub_temp_arr.push(order[i][3][a][b])
                }
                temp_array.push(sub_temp_arr.reduce((a,b)=>a+b))
                sub_temp_arr = [] 
            }
            sum_array.push(temp_array)
            temp_array = []
        }
    
        for(let i = 0;i<order.length;i++){
            string_Array.push(`%0A%0A${order[i][0]}%0A`)
            for(let a = 0;a<order[i][1].length;a++){
                if(sum_array[i][a]>0){
                    string_Array.push(`%0A%20${order[i][1][a]}:%0A`)
                }
                for(let b = 0;b<order[i][2][a].length;b++){
                if(order[i][3][a][b]>0){
                string_Array.push(`%20%20%20*${order[i][2][a][b]}%20x%20${order[i][3][a][b]}%0A`)
                }
                }    
            }
            string_Array.push('-------------------------------------')  
        }
        let joined_string = string_Array.reduce((a,b)=>a+b)
        ans.redirect(`https://api.whatsapp.com/send?phone=51994172125&text=🛵Hola!%20esta%20es%20mi%20Makit-orden:${joined_string}`)
        ask.session.user_sc1 = []
        ask.session.user_sc2 = []
})

app.all('/erase_product/:id',(ask,ans)=>{

        let user_sc_array1 = ask.session.user_sc1
        let user_sc_array2 = ask.session.user_sc2
        let empty_sc_array1 = []
        let empty_sc_array2 = []
        for(let i =0;i < user_sc_array1.length;i++){
            if(i != ask.params.id){
                 empty_sc_array1.push(user_sc_array1[i])
                 empty_sc_array2.push(user_sc_array2[i])
            }
        }
        ask.session.user_sc1 = empty_sc_array1
        ask.session.user_sc2 = empty_sc_array2
        ans.redirect('/firstspclosetopslide',)
    })


/*-----------------------------------------------CARTA-------------------------------------------------*/
/*---------------------menu1----------------------*/
app.all('/firstmenulist1closetopslide',(ask,ans)=>{
   /* if(ask.session.user_id){*/
        pool.getConnection((err,conn)=>{
            const query = 'SELECT * FROM categoriaproductos'
            conn.query(query,(error,filas,campos)=>{
                conn.release()
                ans.render('menumain',{filas:filas}
                )
            })
        })

})
/*---------------------menu2----------------------*/
app.post('/submenu/:id',(ask,ans)=>{
        
        let catarray = []
        
        pool.getConnection((err,conn)=>{ 
                const querya = "SELECT * FROM categoriaitems"
                conn.query(querya,(error,filas,campos)=>{
                    if(error){throw error}
                        for(let i = 0;i<filas.length;i++){
                        catarray.push(i)  
                        }})
                        conn.release()
                   
                        
                        pool.getConnection((err,conn)=>{ 
                                
                                    
                                        let queryarr =[] //"SELECT * FROM productos WHERE state = 'active'"
                                        let orderarr =[0,1,2,3,4]
                                        
                                        const query1 = `SELECT * FROM productos WHERE idcategoria = ${ask.params.id}`
                                        const query2 = "SELECT * FROM categoriaitems"
                                        const query3 = "SELECT * FROM productos_categoriaitems"
                                        const query4 = "SELECT * FROM items"
                                        const query5 = "SELECT * FROM productos"
                                        for(let i = 0;i<catarray.length;i++){
                                            queryarr.push(`SELECT * FROM items WHERE idcategoriaitems = ${i+1}`)
                                            orderarr.push(i+5)
                                        }
                                           
                                        
                                        conn.query(`${query1};${query2};${query3};${query4};${query5};${queryarr.join(";")}`,orderarr,(error,filas,campos)=>{
                                            if(error) throw error
                                            let refmap = {}
                                            refmap["user_id"] = ask.session.user_id
                                            refmap["productos"] = filas[0]
                                            refmap["categoriaitems"] = filas[1]
                                            refmap["productos_categoriaitems"] = filas[2]
                                            refmap["items"] = filas[3]
                                            refmap["productos_whole"] = filas[4]
                                            let content_array = []
                                            for(let i = 0;i<catarray.length;i++){
                                                content_array.push(filas[i+5])
                                            }
                                            refmap["splited_items"] = content_array
                                            conn.release()
                                            ans.render('menusub',refmap)
                                       
                                  
                })})
            })
    })

/*---------------------------SERVIDOR----------------------------------------*/
app.post('/destroysession', (ask, ans)=>{
    ask.session.destroy();
    ans.redirect("/")
  });
app.listen('3000',()=>{
    console.log('MakitApp Iniciada')
})
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
  });