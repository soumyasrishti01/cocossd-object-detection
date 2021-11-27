status = "";
img = "";
objectDetection = "";
objects = [];

function preload() {
    img = "AC pic";
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("ac_detect").innerHTML = "Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img, 0, 0, 600, 400);

    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("ac_detect").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", object[i].x + 15, obejcts[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}