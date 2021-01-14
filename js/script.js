function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function changeColor(cor, fontcolor){
  document.getElementById("body").style.background = cor;
  document.getElementById("clock-time").style.background = cor;
  document.getElementById("footer-font").style.color = fontcolor;
}

async function carregar(){
    while (1) {
        let time1 = window.document.getElementById('hour')
        let time2 = window.document.getElementById('minute')
        let time3 = window.document.getElementById('sec')
        data = new Date()
        let hora = data.getHours()
        let minuto = data.getMinutes()
        let segundo = data.getSeconds()

        if(hora < 10){
            time1.innerHTML = `0${hora}`
        }else{
            time1.innerHTML = hora
        }
        if(minuto < 10){
            time2.innerHTML = `0${minuto}`
        }else{
            time2.innerHTML = minuto
        }
        if(segundo < 10){
            time3.innerHTML = `0${segundo}`
        }else{
            time3.innerHTML = segundo
        }
        await sleep(1000)

        changeColor("linear-gradient(to right, #f12711, #f5af19)", "#f12711");
        
    }
};

