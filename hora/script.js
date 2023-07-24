function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} Minutos.`
    if(hora >= 0 && hora < 12){
        img.src = "https://classic.exame.com/wp-content/uploads/2017/06/thinkstockphotos-466262074.jpg?quality=70&strip=info&w=680"
        document.body.style.background = "#e2cd9f"
    }else if (hora >= 12 && hora < 18) {
        img.src = "teste.jpg"
        document.body.style.background = "#b9846f"
    }else {
        img.src = "https://i.pinimg.com/736x/b1/a9/46/b1a946059aff358939c22e1d160ecbd5--beautiful-night-beautiful-moon.jpg"
        document.body.style.background = "#515154"
    }
}
