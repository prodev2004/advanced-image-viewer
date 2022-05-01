// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh
const container = document.querySelector('.container')
const img = document.querySelector('img')

let zoom = 1
container.addEventListener('wheel', e => {
    img.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`

    zoom += e.deltaY * -0.01
    zoom = Math.min(Math.max(1, zoom), 5)

    if (zoom == 1) {
        img.style.left = '0px'
        img.style.top = '0px'
    }

    img.style.transform = `scale(${zoom})`
})

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

let clicked = false
let xAxis;
let x;
let yAxis;
let y;

container.addEventListener('mouseup', () => container.style.cursor = 'auto')

container.addEventListener('mousedown', e => {
    clicked = true;
    xAxis = e.offsetX - img.offsetLeft;
    yAxis = e.offsetY - img.offsetTop;

    container.style.cursor = 'grabbing'
})

window.addEventListener('mouseup', () => clicked = false)

container.addEventListener('mousemove', e => {
    if (!clicked) return
    e.preventDefault()

    x = e.offsetX
    y = e.offsetY

    img.style.left = `${x - xAxis}px`
    img.style.top = `${y - yAxis}px`

    checkSize()
})

function checkSize () {
    let containerOut = container.getBoundingClientRect()
    let imgIn = img.getBoundingClientRect()

    if (parseInt(img.style.left) > 0) {
        img.style.left = '0px'
    } else if (imgIn.right < containerOut.right) {
        img.style.left = `-${imgIn.width - containerOut.width}px`
    }
    if (parseInt(img.style.top) > 0) {
        img.style.top = '0px'
    } else if (imgIn.bottom < containerOut.bottom) {
        img.style.top = `-${imgIn.height - containerOut.height}px`
    }
}
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh