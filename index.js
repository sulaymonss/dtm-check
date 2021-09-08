const elHeader = document.querySelector('.header')
let score = prompt('Balingizni kiriting', 0) -0

if(score < 80){
    elHeader.textContent = 'Siz talabalikka tavsiya qilinmadingiz'
}else if(score >= 80 && score < 100){
    let confirmStudent = confirm('Siz super kontrakt asosida o\'qishga tavsiya qilindingiz. Kontrakt miqdori: 3000$. /n Rozimisiz?')
    if(confirmStudent){
        let userMoney = prompt('Qancha pulingiz bor')
        if(userMoney >= 3000){
            elHeader.textContent = 'Siz talabasiz!'
        }else elHeader.textContent = 'Pulingiz yetmas ekan, yana biroz ishlang!'
    }
}else if(score >= 100 && score < 150){
    let userMoney = prompt('Siz kontrakt asosida o\'qishga tavsiya qilindingiz. Kontrakt miqdori: 2000$. /n Qancha pulingiz bor?')
    if(userMoney >= 2000){
        elHeader.textContent = 'Siz talabasiz!'
    }else elHeader.textContent = 'Pulingiz yetmas ekan, yana biroz ishlang!'
}else if(score >= 150 && score <=200){
    elHeader.textContent = 'Siz grant asosida talabalikka tavsiya qilindingiz!'
}else alert('Notog\'ri ball kiritdingiz, qaytadan urinib ko\'ring')