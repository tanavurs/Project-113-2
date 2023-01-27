function preload() {

}

function draw() {
image(video, 0, 0, 300, 300)
video.hide()
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.position(490, 200)
    video = createCapture(VIDEO)
    color = ""
}