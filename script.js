setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currenDate =new Date()
    const secondsRatio = currenDate.getSeconds() / 60
    const minutesRatio =(secondsRatio + currenDate.getMinutes()) / 60
    const hoursRatio = ( minutesRatio + currenDate.getHours()) / 12

    setRatation(secondHand,secondsRatio)
    setRatation(minuteHand,minutesRatio)
    setRatation(hourHand,hoursRatio)




}



function setRatation(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)


}

setClock()