const zero = `        <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical active"></div>
<div class="line vertical bottom-vertical active"></div>
<div class="line horizontal center"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom active"></div>
</div>  `

const one = `    <div class="digit">
<div class="line horizontal"></div>
<div class="line vertical top-vertical"></div>
<div class="line vertical bottom-vertical"></div>
<div class="line horizontal center"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom"></div>
</div>`

const two = `    <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical"></div>
<div class="line vertical bottom-vertical active"></div>
<div class="line horizontal center active"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right"></div>
<div class="line horizontal bottom active"></div>
</div>  `

const three = `    <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical"></div>
<div class="line vertical bottom-vertical"></div>
<div class="line horizontal center active"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom active"></div>
</div>`

const four =`    <div class="digit">
<div class="line horizontal"></div>
<div class="line vertical top-vertical active"></div>
<div class="line vertical bottom-vertical"></div>
<div class="line horizontal center active"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom"></div>
</div>  `

const five =`    <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical active"></div>
<div class="line vertical bottom-vertical"></div>
<div class="line horizontal center active"></div>
<div class="line vertical top-vertical right"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom active"></div>
</div> `

const six =`    <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical active"></div>
<div class="line vertical bottom-vertical active"></div>
<div class="line horizontal center active"></div>
<div class="line vertical top-vertical right"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom active"></div>
</div>`

const seven =`    <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical"></div>
<div class="line vertical bottom-vertical"></div>
<div class="line horizontal center"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom"></div>
</div>`

const eight =`    <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical active"></div>
<div class="line vertical bottom-vertical active"></div>
<div class="line horizontal center active"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom active"></div>
</div>`

const nine =`    <div class="digit">
<div class="line horizontal active"></div>
<div class="line vertical top-vertical active"></div>
<div class="line vertical bottom-vertical"></div>
<div class="line horizontal center active"></div>
<div class="line vertical top-vertical right active"></div>
<div class="line vertical bottom-vertical right active"></div>
<div class="line horizontal bottom active"></div>
</div> `

const digits = [zero, one, two, three, four, five, six, seven, eight, nine]

const container = document.getElementById('container')

let time = [0, 0, 0, 0, 0]

container.innerHTML = `${digits[time[0]]} ${digits[time[1]]}  ${digits[time[2]]}<span>:</span> ${digits[time[3]]} ${digits[time[4]]} `

let stop = false

const start = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
let id = 0
start.addEventListener('click', () => {
    stop = false
    id = setInterval(() => {
        if(!stop) {
            time[4] += 1
            if (time[4] == 9) {
                time[4] = 0
                time[3] += 1
            }
            if (time[3] == 9) {
                time[3] = 0
                time[2] += 1
            }
            if (time[2] == 9) {
                time[2] = 0
                time[1] += 1
            }
            if (time[1] == 9) {
                time[1] = 0
                time[0] += 1
            }
            if (time[0] == 9) {
                time[1] = 0
                time[0] += 1
            }
        } else {
            clearInterval()
        }
        render()
    }, 10)
})

stopBtn.addEventListener('click', () => {
    clearInterval(id)
    stop = true
})

resetBtn.addEventListener('click', () => {
    clearInterval(id)
    stop = true
    time = [0, 0, 0, 0, 0]
    render()
})

function render() {
    container.innerHTML = `${digits[time[0]]} ${digits[time[1]]}  ${digits[time[2]]}<span>:</span> ${digits[time[3]]} ${digits[time[4]]} `
}
