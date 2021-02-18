class ball{
	constructor(x,y,r){
		var options={
			friction: 0.03
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("ball.png")
		this.body=Bodies.circle(this.x, this.y, this.r,options)
		World.add(world, this.body);
	}

	display()
	{
		var ballPos=this.body.position;	
		push()
		translate(ballPos.x, ballPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}