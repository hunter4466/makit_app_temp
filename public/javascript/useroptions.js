/*---------------------------VARIABLES NOMBRE Y APELLIDO---------------------------*/

let changenamebtn = document.querySelector('button.nomyap')
let changenamebtn2 = document.querySelector('button.nomyap2')
let changename0 = document.getElementById('changename0')
let changename1 = document.getElementById('changename1')
let changename2 = document.getElementById('changename2')

/*---------------------------VARIABLES TELEFONO---------------------------*/

let changenamebtnpho = document.querySelector('button.chtelbtn')
let changenamebtn2pho = document.querySelector('button.chtelbtn2')
let changename0pho = document.getElementById('changename0pho')
let changename1pho = document.getElementById('changename1pho')
let changename2pho = document.getElementById('changename2pho')
let new_phone_input = document.getElementById('new_phone_input')
let auth_protocol = document.getElementById('auth_protocol')
let tel_exist_cant = document.getElementById('tel_length')
let change_tel_form = document.getElementById('change_tel_form')
let tel_exist_array = []
for(let i = 0;i<tel_exist_cant.value;i++){
    tel_exist_array.push(document.getElementById(`tel_exist_${i}`).value);
    let object_ = document.getElementById(`tel_exist_${i}`)
    object_.remove();
}


/*---------------------------VARIABLES E-MAIL---------------------------*/
 
let changenamebtnmail = document.querySelector('button.chmailbtn')
let changenamebtn2mail = document.querySelector('button.chmailbtn2')
let changename0mail = document.getElementById('changename0mail')
let changename1mail = document.getElementById('changename1mail')
let changename2mail = document.getElementById('changename2mail')
let email_reg = document.getElementById('email_reg')


/*---------------------------VARIABLES CUMPLEAÑOS---------------------------*/
 
let changenamebtncum = document.querySelector('button.chcumbtn')
let changenamebtn2cum = document.querySelector('button.chcumbtn2')
let changenamebtncum_add = document.querySelector('button.chcumbtn_add')
let header_ch_email = document.getElementById('header_ch_email')
let changename0cum = document.getElementById('changename0cum')
let changename1cum = document.getElementById('changename1cum')
let changename2cum = document.getElementById('changename2cum')

/*---------------------------VARIABLES CONTRASEÑA---------------------------*/
 
let changenamebtnpass = document.querySelector('button.chpassbtn')
let changenamebtn2pass = document.querySelector('button.chpassbtn2')
let changename0pass = document.getElementById('changename0pass')
let changename1pass = document.getElementById('changename1pass')
let changename2pass = document.getElementById('changename2pass')

let active_pass = document.getElementById('active_pass').value;
document.getElementById('active_pass').remove();
/*---------------------------SECTOR NOMBRE Y APELLIDO---------------------------*/

changenamebtn.addEventListener('click',(event)=>{
    if(changename0.className == "nomyapslide0rev"){
        event.preventDefault();
        changename0.style.display = 'inline';
        changename1.style.display = 'inline';
        changename2.style.display = 'inline';
        changename0.className = "nomyapslide0";
        changename1.className = "nomyapslide1";
        changename2.className = "nomyapslide2";
        console.log(changenamebtnpho)
        console.log(changenamebtn2pho)
        console.log(changename0pho)
        console.log(changename1pho)
        console.log(changename2pho)
    }
    else{
        event.preventDefault();
        changename0.style.display = 'inline';
        changename1.style.display = 'inline';
        changename2.style.display = 'inline';
        changename0.className = "nomyapslide0rev";
        changename1.className = "nomyapslide1rev";
        changename2.className = "nomyapslide2rev";
    }
    })
changenamebtn2.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0.style.display = 'inline';
        changename1.style.display = 'inline';
        changename2.style.display = 'inline';
        changename0.className = "nomyapslide0rev";
        changename1.className = "nomyapslide1rev";
        changename2.className = "nomyapslide2rev";
})
changename0.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0.style.display = 'inline';
        changename1.style.display = 'inline';
        changename2.style.display = 'inline';
        changename0.className = "nomyapslide0rev";
        changename1.className = "nomyapslide1rev";
        changename2.className = "nomyapslide2rev";
})

/*---------------------------SECTOR TELEFONO---------------------------*/
 
changenamebtnpho.addEventListener('click',(event)=>{
    if(changename0pho.className == "nomyapslide0revpho"){
        event.preventDefault();
        changename0pho.style.display = 'inline';
        changename1pho.style.display = 'inline';
        changename2pho.style.display = 'inline';
        changename0pho.className = "nomyapslide0pho";
        changename1pho.className = "nomyapslide1pho";
        changename2pho.className = "nomyapslide2pho";
    }
    else{
        event.preventDefault();
        changename0pho.style.display = 'inline';
        changename1pho.style.display = 'inline';
        changename2pho.style.display = 'inline';
        changename0pho.className = "nomyapslide0revpho";
        changename1pho.className = "nomyapslide1revpho";
        changename2pho.className = "nomyapslide2revpho";
    }
    })
changenamebtn2pho.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0pho.style.display = 'inline';
        changename1pho.style.display = 'inline';
        changename2pho.style.display = 'inline';
        changename0pho.className = "nomyapslide0revpho";
        changename1pho.className = "nomyapslide1revpho";
        changename2pho.className = "nomyapslide2revpho";
})
changename0pho.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0pho.style.display = 'inline';
        changename1pho.style.display = 'inline';
        changename2pho.style.display = 'inline';
        changename0pho.className = "nomyapslide0revpho";
        changename1pho.className = "nomyapslide1revpho";
        changename2pho.className = "nomyapslide2revpho";
})
function mod_phone_validation(){
    if(tel_exist_array.includes(new_phone_input.value)){
        new_phone_input.placeholder = "El teléfono ya se encuentra en uso"
        new_phone_input.value= ""
        return false
    }
    else{
        auth_protocol.value ="authpermission11052021value_true"
        return true
    }
}

/*---------------------------SECTOR EMAIL---------------------------*/
let auth_protocol_email = document.getElementById('auth_protocol_email')
let active_email = document.getElementById('active_email')
let email_cant = document.getElementById('email_cant')
let new_email_input = document.getElementById('new_email_input')

email_exist_arr = []
for(let i = 0; i<email_cant.value;i++){
email_exist_arr.push(document.getElementById(`email_exist_${i}`).value)
let object_ = document.getElementById(`email_exist_${i}`)
    object_.remove();
}
 
changenamebtnmail.addEventListener('click',(event)=>{
    if(changename0mail.className == "nomyapslide0revmail"){
        event.preventDefault();
        changename0mail.style.display = 'inline';
        changename1mail.style.display = 'inline';
        changename2mail.style.display = 'inline';
        changename0mail.className = "nomyapslide0mail";
        changename1mail.className = "nomyapslide1mail";
        changename2mail.className = "nomyapslide2mail";
    }
    else{
        event.preventDefault();
        changename0mail.style.display = 'inline';
        changename1mail.style.display = 'inline';
        changename2mail.style.display = 'inline';
        changename0mail.className = "nomyapslide0revmail";
        changename1mail.className = "nomyapslide1revmail";
        changename2mail.className = "nomyapslide2revmail";
    }
    })
changenamebtn2mail.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0mail.style.display = 'inline';
        changename1mail.style.display = 'inline';
        changename2mail.style.display = 'inline';
        changename0mail.className = "nomyapslide0revmail";
        changename1mail.className = "nomyapslide1revmail";
        changename2mail.className = "nomyapslide2revmail";
})
changename0mail.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0mail.style.display = 'inline';
        changename1mail.style.display = 'inline';
        changename2mail.style.display = 'inline';
        changename0mail.className = "nomyapslide0revmail";
        changename1mail.className = "nomyapslide1revmail";
        changename2mail.className = "nomyapslide2revmail";
})
function save_mod_email_auth(){
    if(email_exist_arr.includes(new_email_input.value)){
           new_email_input.value = ""
           new_email_input.placeholder = "El E-Mail Ingresado ya existe"
           return false
       }
       else{
               let nei = new_email_input.value 
           if(nei.length > 8){
           auth_protocol_email.value="authpermission11052021value_true"
           return true
       }
       else{
           new_email_input.value = ""
           new_email_input.placeholder = "El E-Mail debe ser mayor a 8 dígitos"
           return false
       }
       }
   }


/*---------------------------SECTOR CUMPLEAÑOS---------------------------*/
let auth_protocol_birth = document.getElementById('auth_protocol_birth')
let new_birth_input_2 = document.getElementById('new_birth_input_2')

changenamebtn2cum.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0cum.style.display = 'inline';
        changename1cum.style.display = 'inline';
        changename2cum.style.display = 'inline';
        changename0cum.className = "nomyapslide0revcum";
        changename1cum.className = "nomyapslide1revcum";
        changename2cum.className = "nomyapslide2revcum";
})
changename0cum.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0cum.style.display = 'inline';
        changename1cum.style.display = 'inline';
        changename2cum.style.display = 'inline';
        changename0cum.className = "nomyapslide0revcum";
        changename1cum.className = "nomyapslide1revcum";
        changename2cum.className = "nomyapslide2revcum";
})
changenamebtncum_add.addEventListener('click',(event)=>{
    event.preventDefault();
    
    changename0cum.style.display = 'inline';
        changename1cum.style.display = 'inline';
        changename2cum.style.display = 'inline';
        changename0cum.className = "nomyapslide0cum";
        changename1cum.className = "nomyapslide1cum";
        changename2cum.className = "nomyapslide2cum";
})
function save_mod_birth(){
    console.log(new_birth_input_2.value)
    auth_protocol_birth.value = "authpermission11052021value_true"
    return true
}

/*---------------------------SECTOR CONTRASEÑA---------------------------*/
 
changenamebtnpass.addEventListener('click',(event)=>{
    if(changename0pass.className == "nomyapslide0revpass"){
        event.preventDefault();
        changename0pass.style.display = 'inline';
        changename1pass.style.display = 'inline';
        changename2pass.style.display = 'inline';
        changename0pass.className = "nomyapslide0pass";
        changename1pass.className = "nomyapslide1pass";
        changename2pass.className = "nomyapslide2pass";
    }
    else{
        event.preventDefault();
        changename0pass.style.display = 'inline';
        changename1pass.style.display = 'inline';
        changename2pass.style.display = 'inline';
        changename0pass.className = "nomyapslide0revpass";
        changename1pass.className = "nomyapslide1revpass";
        changename2pass.className = "nomyapslide2revpass";
    }
    })
changenamebtn2pass.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0pass.style.display = 'inline';
        changename1pass.style.display = 'inline';
        changename2pass.style.display = 'inline';
        changename0pass.className = "nomyapslide0revpass";
        changename1pass.className = "nomyapslide1revpass";
        changename2pass.className = "nomyapslide2revpass";
})
changename0pass.addEventListener('click',(event)=>{
    event.preventDefault();
        changename0pass.style.display = 'inline';
        changename1pass.style.display = 'inline';
        changename2pass.style.display = 'inline';
        changename0pass.className = "nomyapslide0revpass";
        changename1pass.className = "nomyapslide1revpass";
        changename2pass.className = "nomyapslide2revpass";
})

let actual_pass_input = document.getElementById('actual_pass_input')
let new_pass_1_input =document.getElementById('new_pass_1_input')
let new_pass_2_input =document.getElementById('new_pass_2_input')
let auth_protocol_pass = document.getElementById('auth_protocol_pass')

function mod_pass_validation(){
    if(actual_pass_input.value !== active_pass){
        actual_pass_input.value = ""
        actual_pass_input.placeholder = "Contraseña incorrecta!"
        return false
    }
    else{
       if(new_pass_1_input.value == new_pass_2_input.value){
           let str = new_pass_1_input.value
        if (str.length < 8 ){
        new_pass_1_input.value =""
        new_pass_1_input.placeholder= "Las contraseña debe tener"
        new_pass_2_input.value = ""
        new_pass_2_input.placeholder = "8 caracteres como mínimo"
        return false
        }
        else{
            auth_protocol_pass.value = "authpermission11052021value_true"
            return true
        }
       }
       else{
        new_pass_1_input.value =""
        new_pass_1_input.placeholder= "Las contraseñas no coinciden"
        new_pass_2_input.value = ""
        new_pass_2_input.placeholder = "por favor, intenta de nuevo."
        return false
       }
    }
}


/*
let register_new_adres = document.getElementById('register_new_adress')

register_new_adress.addEventListener('click',(event)=>{
    event.preventDefault();
    
})


*/
function formattedDate(d = new Date) { return [d.getDate(), d.getMonth()+1, d.getFullYear()].map(n => n < 10 ? `0${n}` : `${n}`).join('/');}
