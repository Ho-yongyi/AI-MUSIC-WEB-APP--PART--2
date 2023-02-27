song = "";
song2 = "";
function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("https://www.youtube.com/watch?v=de9VHXKhWXc")
}
function setup()
{
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 600);
}