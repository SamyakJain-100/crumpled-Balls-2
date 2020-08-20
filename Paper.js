class Paper {
constructor(x,y){
 var options ={
    isStatic: false,
    restitution : 0.3 ,
    friction :0.5 ,
    density : 1.2
     }
this.paperObject = Bodies.rectangle(x,y,50,50,options);

World.add(world, this.body);
    }
display(){

    push()
translate(pos.x , pos.y)
rectMode(CENTER);
stroke("pink")
rect(0,0,this.width,this.height);
pop();
    }
};