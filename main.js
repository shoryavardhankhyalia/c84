canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_array = ["img_1.jpg", "img_2.jpeg", "img_3.jpeg", "img_4.jpeg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_width= 100;
rover_height= 90;

background_Image = nasa_mars_array[random_number];

rover_Image = "rover.png";
rover_x = 10;
rover_y = 10;

function add() {

background_imgTag = new Image();
background_imgTag.onload = uploadbackground;
background_imgTag.src = background_Image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_Image;

}

function uploadbackground(){

ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height) 

}

function uploadrover(){

    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height) 
    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

    keyPressed = e.keyCode;
    console.log("keyPessed");
    if(keyPressed == '38')
    {

        up();
        console.log("up");  

    }
    if(keyPressed == '40')
    {

        down();
        console.log("down");  

    }
    if(keyPressed == '37')
    {

        left();
        console.log("left");  

    }
    if(keyPressed == '39')
    {

        right();
        console.log("right");  

    

}
}
function down()
{
    if(rover_y <=500)
    {
     rover_y = rover_y + 10;
     console.log("when down arrow is pressed,  x = " + rover_x + " y = " +rover_y);
     uploadbackground();
     uploadrover(); 

    }
}
function up()
{
    if(rover_y >=0)
    {
     rover_y = rover_y - 10;
     console.log("when up arrow is pressed,  x = " + rover_x + " y = " +rover_y);
     uploadbackground();
     uploadrover(); 

    }
}
function left()
{
    if(rover_x >=0)
    {
     rover_x = rover_x - 10;
     console.log("when left arrow is pressed,  x = " + rover_x + " y = " +rover_y);
     uploadbackground();
     uploadrover(); 

    }
}
function right()
{
    if(rover_x <=700)
    {
     rover_x = rover_x + 10;
     console.log("when right arrow is pressed,  x = " + rover_x + " y = " +rover_y);
     uploadbackground();
     uploadrover(); 

    }
}


