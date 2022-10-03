
const container=document.querySelector('.container')
pwShowHide=document.querySelectorAll('.showHidePw')
pwFields=document.querySelectorAll('.password')
signUp=document.querySelector('.signup-link')
login=document.querySelector('.login-link')


pwShowHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener('click', ()=>{
        pwFields.forEach(pwFields=>{
            console.log(pwFields)
            if(pwFields.type==="password"){
                pwFields.type="text"

                pwShowHide.forEach(icon=>{
                    icon.classList.replace('fa-eye-slash', 'fa-eye')
                })
            }
            else{
                pwFields.type='password'
                pwShowHide.forEach(icon=>{
                    icon.classList.replace('fa-eye', 'fa-eye-slash')
                })
            }
        })
    })
})


signUp.addEventListener('click', (e)=>{
    e.preventDefault()
    container.classList.add('active')
})

login.addEventListener('click', (e)=>{
    e.preventDefault()
    container.classList.remove('active')
})


























// let login = document.querySelectorAll('.login')
// let password=document.querySelector('.password')
// let eye=document.querySelector('.fa-eye-slash')
// let psw=document.querySelector('.psw')
// let psw2=document.querySelector('.psw2')
// let login_now=document.querySelector('.login_button_now')
// let eye_register=document.querySelector('.eye_register')
// let password_register=document.querySelector('.password_register')
// login.forEach(item => {
//     item.addEventListener('click', (e) => {

//         if(item.classList.contains('lgn')){
//             password.type='password'
//             eye.classList.replace('fa-eye', 'fa-eye-slash')

//         }

//         login.forEach(item => {
//             item.classList.remove('active')
//         })
//         e.target.parentElement.classList.add('active')
     
//     })
// })

// eye.addEventListener('click', ()=>{
//     if(psw2.classList.contains('active')){
//         password.type="text"
//     }
//     else{
//         password.type='password'
//     }

//     if(password.type==="text"){
//         eye.classList.replace('fa-eye-slash', 'fa-eye')
//     }
//     else{
//         eye.classList.replace('fa-eye', 'fa-eye-slash')

//     }
// })

// eye_register.addEventListener('click', ()=>{
//     if(psw2.classList.contains('active')){
//         password_register.type="text"
//     }
//     else{
//         password_register.type='password'
//     }

//     if(password_register.type==="text"){
//         eye_register.classList.replace('fa-eye-slash', 'fa-eye')
//     }
//     else{
//         eye_register.classList.replace('fa-eye', 'fa-eye-slash')

//     }
// })

// login_now.addEventListener('click', ()=>{
//     login_form.style.display="block"
//     register.style.display="none"
// })


// const sign=document.querySelector('.sign')
// const register=document.querySelector('.register_form')
// const login_form=document.querySelector('.login_form')
// sign.addEventListener('click', (e)=>{
//     e.preventDefault()
// register.style.display="block"
// login_form.style.display="none"
// })