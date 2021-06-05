let intranet_acces = document.getElementById('intranet_acces')
let adm_log = document.getElementById('adm_log')
let adm_log_backshadow = document.getElementById('adm_log_backshadow')


intranet_acces.addEventListener('click',(event)=>{
    event.preventDefault();
    adm_log.className = "adm_log_op"
    adm_log_backshadow.className = "adm_log_backshadow_op"
    adm_log.style = "display: inline"
    adm_log_backshadow.style = "display: inline"
})
adm_log_backshadow.addEventListener('click',(event)=>{
    event.preventDefault();
    adm_log.className = "adm_log_cl"
    adm_log_backshadow.className = "adm_log_backshadow_cl"
})


