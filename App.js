    /*installed express, nodemon, ejs, body-parser, express-flash, express-session, cookie parser*/
/*---------------------------LIBRERIAS----------------------------------------*/
const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const config = require('./configuration/config')
const session = require('express-session')
const nodemailer = require('nodemailer')
const mysql = require('mysql')
const app = express()
const queryString = require('query-string')
const { facebook_api_key } = require('./configuration/config')
const { response } = require('express')
const { AssetList } = require('twilio/lib/rest/serverless/v1/service/asset')
const { render } = require('ejs')
var addRequestId = require('express-request-id')();
const accountSid = 'AC855fc2a93fc920ad4d24184348494c98'; 
const authToken = 'ba0e9351247abb2ab2356a2ac8af6aca'; 
const client = require('twilio')(accountSid, authToken); 

/*---------------------------USOS----------------------------------------*/
app.set('view engine', 'ejs')
app.set('views',  './views');
app.use(session({ secret: 'token-muy-secreto', key: 'sid', resave: true, saveUninitialized: true }));
app.use(express.json());
app.use(express.urlencoded()); 
app.use(addRequestId);
app.use(express.static("public"))
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
  });


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
/*---------------------------MAILER----------------------------------------*/
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'makitperu@gmail.com',
        pass: 'iqnf mmqu zxrr zqme'
    }
})
/*---------------------------MESSAGEBIRD-------------------------*/

/*---------------------------INICIO DE SESION----------------------------------------*/

app.all('/',(ask,ans)=>{
    ask.session.destroy();
            ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
                                        message2:'¡Créala ya mismo!',
                                        nameval:"",
                                        lnameval:"",
                                        telval:"",
                                        pw1val:"",
                                        pw2val:""})
                                        
     
})

app.all('/try/:id',(ask,ans)=>{
    client.messages 
    .create({ 
       body: 'Estoy probando el ID', 
       from: '+19542313121',
       messagingServiceSid: 'MG0c12ce933ceb4e50a35a3d5bfab152cf',      
       to: `+51${ask.params.id}`
     }) 
    .then(message => console.log(message.sid)) 
    .done();
    ans.redirect('/')
})

/*app.all("/mail", (ask,ans)=>{
    transporter.sendMail({from: 'makitperu@gmail.com',to:`${ask.session.email}`,subject:`Hola ${ask.session.usuario}`,text:`Bienvenido ${ask.session.usuario}, has logeado correctamente.`}, (error,info)=>{
        if (error) throw error;
        else throw info
        
    })
    ans.render('principal',{clientuser:ask.session.usuario,})
})*/



app.all('/iniciar_sesion',(ask,ans)=>{
    pool.getConnection((err,conn)=>{
        if (err) throw err;
        const query1 = `SELECT * FROM clientes WHERE telefono = "${ask.body.usuario}" AND contrasena = "${ask.body.contrasena}"`
        const query2 = 'SELECT * FROM clientes'
        conn.query(`${query1};${query2}`,[0,1],(error,filas,campos)=>{
            if (error) throw error
            if(filas[0].length == 0){
                if(error) throw error
                ans.render('index',{message:'Usuario o Contraseña errados, si no tienes una cuenta ¿qué esperas?',
                                        message2:'¡Créala ya mismo!',
                                        nameval:"",
                                        lnameval:"",
                                        telval:"",
                                        pw1val:"",
                                        pw2val:"" })
                conn.release()
            }
            else{
                    tel_list_temp_array = []
                    for(let i = 0;i<filas[1].length;i++){
                    tel_list_temp_array.push(filas[1][i].telefono)
                    }
                    ask.session.tel_list = tel_list_temp_array
                    tel_list_temp_array =[]

                    email_list_temp_array = []
                    for(let i = 0;i<filas[1].length;i++){
                    email_list_temp_array.push(filas[1][i].email)
                    }
                    ask.session.email_list = email_list_temp_array
                    email_list_temp_array = []



                    ask.session.user_pass = filas[0][0].contrasena
                    ask.session.email = filas[0][0].email
                    ask.session.usuario = filas[0][0].nombre
                    ask.session.user_id = filas[0][0].idclientes
                    ask.session.user_sc1 = []
                    ask.session.user_sc2 = []
                    ask.session.user_sc3 = []
                    conn.release()
                    ans.render('principal',{welcome:`¡Hola`,
                                            username:`${ask.session.usuario}!`})
                
            
                
            }    
        })
    })
})
app.all('/register_user',(ask,ans)=>{
            ans.render('nuevousuario',
                            {nameval:"",
                            lnameval:"",
                            telval:"",
                            placeholder:"Teléfono",
                            pw1val:"",
                            pw2val:"",
                            label_text:"Hemos enviado a tu celular un mensaje de texto con el código de verificación:",
                            vc_dis:"display:none; position:relative; margin-top:1vh; width:50vw",
                            vc_dis2:"color:white; display:none; position:relative; margin-top:1vh; width:70vw",
                            vc_dis3:"color:white; display:none; position:relative; margin-top:1vh; width:50vw",
                            vc_dis4:"display:inline;margin-top: 1vh;",
                            vc_dis5:"display:none;margin-top: 1vh;"
                               })
     
    
})

app.all('/validate_phone',(ask,ans)=>{
    pool.getConnection((err,conn)=>{
        const query = `SELECT * FROM clientes WHERE telefono = ${ask.body.telefono}`
        conn.query(query,(error,filas,campos)=>{
            if(filas.length > 0){
                console.log("paso por el if")
                ans.render('nuevousuario',
                {nameval:ask.body.nombres,
                    lnameval:ask.body.apellidos,
                    telval:"",
                    placeholder:"El teléfono ya ha sido asignado a otra cuenta",
                    pw1val:ask.body.password1,
                    pw2val:ask.body.password2,
                    label_text:"Hemos enviado a tu celular un mensaje de texto con el código de verificación:",
                    vc_dis:"display:none; position:relative; margin-top:1vh; width:50vw",
                    vc_dis2:"color:white; display:none; position:relative; margin-top:1vh; width:70vw",
                    vc_dis3:"color:white; display:none; position:relative; margin-top:1vh; width:50vw",
                    vc_dis4:"display:inline;margin-top: 1vh;",
                    vc_dis5:"display:none;margin-top: 1vh;"
                   })
            }
            else{
                console.log("paso por el else")
                let digit1 = Math.floor(Math.random() * 10)
                let digit2 = Math.floor(Math.random() * 10)
                let digit3 = Math.floor(Math.random() * 10)
                let digit4 = Math.floor(Math.random() * 10)
                let v_num = (digit1*1000)+(digit2*100)+(digit3*10)+digit4
                ask.session.v_num = v_num
                console.log(v_num)
                ans.render('nuevousuario',
                                        {nameval:ask.body.nombres,
                                        lnameval:ask.body.apellidos,
                                        telval:ask.body.telefono,
                                        placeholder:"Teléfono",
                                        pw1val:ask.body.password1,
                                        pw2val:ask.body.password2,
                                        label_text:"Hemos enviado a tu celular un mensaje de texto con el código de verificación:",
                                        vc_dis:"display:inline; position:relative; margin-top:1vh; width:50vw",
                                        vc_dis2:"color:white; display:inline; position:relative; margin-top:1vh; width:70vw",
                                        vc_dis3:"color:white; display:inline; position:relative; margin-top:1vh; width:50vw",
                                        vc_dis4:"display:none;margin-top: 1vh;",
                                        vc_dis5:"display:inline;margin-top: 1vh;"
                                        })
            }
        })
    })
})
app.all('/validate_phone_2',(ask,ans)=>{
    if(ask.body.verification_code == ask.session.v_num){
        console.log("pasó por la verificación")
        ans.render('nuevousuario',
                                        {nameval:ask.body.nombres,
                                        lnameval:ask.body.apellidos,
                                        telval:ask.body.telefono,
                                        placeholder:"Teléfono",
                                        pw1val:ask.body.password1,
                                        pw2val:ask.body.password2,
                                        label_text:"¡VERIFICADO!",
                                        vc_dis:"display:none; position:relative; margin-top:1vh; width:50vw",
                                        vc_dis2:"color:white; display:inline; position:relative; margin-top:3vh; width:70vw",
                                        vc_dis3:"color:white; display:inline; position:relative; margin-top:1vh; width:50vw",
                                        vc_dis4:"display:none;margin-top: 1vh;",
                                        vc_dis5:"display:none;margin-top: 1vh;"
                                        })
    }
    else{
        console.log("no pasó por la verificación")
        ans.render('nuevousuario',
                                        {nameval:ask.body.nombres,
                                        lnameval:ask.body.apellidos,
                                        telval:ask.body.telefono,
                                        placeholder:"Teléfono",
                                        pw1val:ask.body.password1,
                                        pw2val:ask.body.password2,
                                        label_text:"Código incorrecto, por favor, intenta de nuevo",
                                        vc_dis:"display:inline; position:relative; margin-top:1vh; width:50vw",
                                        vc_dis2:"color:white; display:inline; position:relative; margin-top:1vh; width:70vw",
                                        vc_dis3:"color:white; display:inline; position:relative; margin-top:1vh; width:50vw",
                                        vc_dis4:"display:none;margin-top: 1vh;",
                                        vc_dis5:"display:inline;margin-top: 1vh;"
                                        })
    }
})


app.all('/guardarnuevocliente',(ask,ans)=>{
    if(ask.body.validation_input == "validate_succeed" && ask.body.phone_validation_input == "phone_validation_succeed"){
        pool.getConnection((err,conn)=>{
            const query = `INSERT INTO clientes (nombre, apellido, telefono, contrasena) VALUES ("${ask.body.nombres}","${ask.body.apellidos}","${ask.body.telefono}","${ask.body.password1}")`
            conn.query(query,(error,filas,campos)=>{
                if (error) throw error
                console.log('se creó la cuenta')
                conn.release()
                ans.redirect('/')
            })
    
        })
    }
    else{
        console.log('no se creó la cuenta')  
        ans.redirect('/')
    }
    
})
        
/*---------------------------------CARTA MAKIT------------------------*/
app.all('/carta',(ask,ans)=>{
    ans.render('cartamakit')
})
app.all('/links',(ask,ans)=>{
    ans.render('links')
})
/*-------------facebook-redirect-------------*/
app.all('/facebook-login',(ask,ans)=>{
    ans.render('principal',{welcome:`Bienvenida`,
    username:`${ask.session.usuario}`})
})
/*----------------------------------------------BOTONES DE NAVEGACIÓN DE TOP MENU------------------------------------------------------------------*/ 
/*-----------------Home----------------------------------*/ 
app.all('/firsthomeclosetopslide',(ask,ans)=>{
    if(ask.session.user_id){
        ans.render('principal',{welcome:`¡Hola`,
                                username:`${ask.session.usuario}!`
                                   })
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})
/*-----------------Shopping cart----------------------------------*/

app.all('/firstspclosetopslide',(ask,ans)=>{
    if(ask.session.user_id){

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
                                        const query6 = `SELECT * FROM direcciones WHERE idclientes =${ask.session.user_id}`
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

         
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})

app.all('/fillshoppingcart',(ask,ans)=>{
    if(ask.session.user_id){

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

    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})

app.all('/fillshoppingcart2',(ask,ans)=>{
    if(ask.session.user_id){
        temp_array = ask.session.user_sc1
        temp_array.push([[`${ask.body.sprod_name_input} x ${ask.body.single_prod_input_cant}`],[[0]],[[0]],[[0]],ask.body.active_product2,'single'])
        ask.session.user_sc1 = temp_array
        temp_array2 = ask.session.user_sc2
        temp_array2.push(parseFloat(ask.body.sprod_price_input*ask.body.single_prod_input_cant).toFixed(2))
        ask.session.user_sc2 = temp_array2
        ans.redirect('/firstspclosetopslide',)
    }
})




app.all('/mod_product_confirm/:id',(ask,ans)=>{
    if(ask.session.user_id){
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


}
else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}


})

app.all('/clear_sc',(ask,ans)=>{
    if(ask.session.user_id){
        ask.session.user_sc1 = []
        ask.session.user_sc2 = []
        ans.redirect('/firstspclosetopslide',)

    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})
app.all('/send_order',(ask,ans)=>{
    if(ask.session.user_id){
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

    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})

app.all('/erase_product/:id',(ask,ans)=>{
    if(ask.session.user_id){
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
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})

app.all('modify_product',(ask,ans)=>{
    if(ask.session.user_id){



    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})




/*-----------------------------------------------CARTA-------------------------------------------------*/
/*---------------------menu1----------------------*/
app.all('/firstmenulist1closetopslide',(ask,ans)=>{
    if(ask.session.user_id){
        pool.getConnection((err,conn)=>{
            const query = 'SELECT * FROM categoriaproductos'
            conn.query(query,(error,filas,campos)=>{
                conn.release()
                ans.render('menumain',{filas:filas}
                )
            })
        })
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})
/*---------------------menu2----------------------*/
app.post('/submenu/:id',(ask,ans)=>{
    if(ask.session.user_id){
        
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

        }
        else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
    })
/*----------------ADM LOGIN--------------------- */
/*
app.all('/get_adm_panel',(ask,ans)=>{
    pool.getConnection((err,conn)=>{
        const query1 = `SELECT * FROM admins WHERE user = "${ask.body.adm_user}" AND pass = "${ask.body.adm_pass}"`
        const query2= `SELECT * FROM clientes`
        conn.query(`${query1};${query2}`,[0,1],(error,filas,campos)=>{
            if (filas[0].length>0){
                ask.session.adm_token = filas[0][0].nombre
                ans.render("adm_control_panel",{name:ask.session.adm_token,
                                                                                customers_table:filas[1]}
                                                                                )
                                                                                conn.release()}
                                                                                else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
                                                                                message2:'¡Créala ya mismo!',
                                                                                nameval:"",
                                                                                lnameval:"",
                                                                                telval:"",
                                                                                pw1val:"",
                                                                                pw2val:"" })
                                                                                conn.release()}
        })
    })
})

app.all('/kds',(ask,ans)=>{
    render('kds_loggin',{kds_login_msg:"Por favor ingresa tu usuario y contraseña"})
})

app.all('/kds_submit_login',(ask,ans)=>{
    pool.getConnection((err,conn)=>{
        const query = `SELECT * FROM stores WHERE user = "${ask.body.user_input}" AND pass = "${ask.body.user_password}"`
        conn.query(query,(error,filas,campos)=>{
            if(filas.length>0){
                ask.session.store_id = filas.idstores
                ask.session.store_token = filas.store_name
                ans.redirect('/load_kds')
                conn.release()
            }
            else{
                ans.render('kds_loggin',{kds_login_msg:"El usuario o contraseña es incorrecto"})
                conn.release()
            }
        })
    })
})

app.all('/load_kds',(ask,ans)=>{
    if(ask.session.store_token){
        pool.getConnection((err,conn)=>{
            const query1 = `SELECT * FROM store_${ask.session.store_id}_orders`
            const query2 = `SELECT * FROM `
        })
        
        


    }
    else{
        redirect('/kds')
    }
}
*/
/*-----------------Usuario----------------------------------*/
app.all('/firstuserinfoclosetopslide',(ask,ans)=>{
    if(ask.session.user_id){
        pool.getConnection((err,conn)=>{
            const query1 = `SELECT * FROM clientes WHERE idclientes = "${ask.session.user_id}"`
            const query2 = `SELECT * FROM direcciones WHERE idclientes = "${ask.session.user_id}"`
            const query3 = 'SELECT telefono FROM clientes'
            const query4 = 'SELECT email FROM clientes'
            conn.query(`${query1};${query2};${query3};${query4}`,[0,1,2,3],(error,filas,campos)=>{
                conn.release()
                console.log(ask.session.tel_list)
                tel_list_temp_array = []
                    for(let i = 0;i<filas[2].length;i++){
                    tel_list_temp_array.push(filas[2][i].telefono)
                    }
                    ask.session.tel_list = tel_list_temp_array

                    email_list_temp_array = []
                    for(let i = 0;i<filas[3].length;i++){
                    email_list_temp_array.push(filas[3][i].email)
                    }
                    ask.session.email_list = email_list_temp_array

                ans.render('userinfo',{filas:filas[0],
                                                direcciones:filas[1],
                                                tel_list:ask.session.tel_list,
                                                user_pass:filas[0][0].contrasena,
                                                user_email:filas[0][0].email,
                                                email_list:ask.session.email_list
                            })
            })
        })
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})

app.all('/savemodname',(ask,ans)=>{
    if(ask.session.user_id){
        pool.getConnection((err,conn)=>{
            const query1 = `UPDATE clientes SET nombre="${ask.body.name_mod}",apellido="${ask.body.last_name_mod}" WHERE idclientes="${ask.session.user_id}"`
            const query2 = `SELECT * FROM clientes WHERE idclientes="${ask.session.user_id}"`
            conn.query(`${query1};${query2}`,[0,1],(error,filas,campos)=>{
                conn.release()
                ask.session.usuario = filas[1][0].nombre
                ans.redirect('/firstuserinfoclosetopslide')
                                            
                            })
            }) 
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})
app.all('/savemodtel',(ask,ans)=>{
    if(ask.session.user_id){
        if(ask.body.auth_protocol  == "authpermission11052021value_true"){
        pool.getConnection((err,conn)=>{
            const query = `UPDATE clientes SET telefono="${ask.body.change_tel}" WHERE idclientes="${ask.session.user_id}"`
            conn.query(query,(error,filas,campos)=>{
                conn.release()
                ans.redirect('/firstuserinfoclosetopslide')
                                            
                            })
            }) 
        }
        else{ans.redirect('/firstuserinfoclosetopslide')

        }
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})
app.all('/savemodpass',(ask,ans)=>{
    if(ask.session.user_id){
        if(ask.body.auth_protocol_pass  == "authpermission11052021value_true"){
        pool.getConnection((err,conn)=>{
            const query1 = `UPDATE clientes SET contrasena="${ask.body.new_pass_input}" WHERE idclientes="${ask.session.user_id}"`
            conn.query(query1,(error,filas,campos)=>{
                conn.release()
                ans.redirect('/firstuserinfoclosetopslide')                             
                            })
            }) 
        }
        else{
            ans.redirect('/firstuserinfoclosetopslide')
        }
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})
app.all('/savemodemail',(ask,ans)=>{
    if(ask.session.user_id){
        if(ask.body.auth_protocol_email  == "authpermission11052021value_true"){
        pool.getConnection((err,conn)=>{
            const query1 = `UPDATE clientes SET email="${ask.body.new_email_input}" WHERE idclientes="${ask.session.user_id}"`
            conn.query(query1,(error,filas,campos)=>{
                conn.release()
                ans.redirect('/firstuserinfoclosetopslide')                             
                            })
            }) 
        }
        else{
            ans.redirect('/firstuserinfoclosetopslide')
        }
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
})
app.all('/savemodbirth',(ask,ans)=>{
    if(ask.session.user_id){
        if(ask.body.auth_protocol_birth  == "authpermission11052021value_true"){
            console.log('passed this step')
            console.log(ask.body.new_birth_input_2)
        pool.getConnection((err,conn)=>{
            const query1 = `UPDATE clientes SET cumpleanos="${ask.body.new_birth_input_2}" WHERE idclientes="${ask.session.user_id}"`
            conn.query(query1,(error,filas,campos)=>{
                if (error) throw error
                conn.release()
                ans.redirect('/firstuserinfoclosetopslide')                             
                            })
            }) 
        }
        else{
            ans.redirect('/firstuserinfoclosetopslide')
        }
    }
    else{ans.render('index',{message:'Ingresa tu usuario y contraseña, si no tienes una cuenta ¿qué esperas?',
    message2:'¡Créala ya mismo!',
    nameval:"",
    lnameval:"",
    telval:"",
    pw1val:"",
    pw2val:"" })}
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