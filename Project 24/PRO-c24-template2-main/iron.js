class Iron{
	constructor(x,y)
	{
		var options = {'restitution': 0,
						'friction': 13,
					'density':100};
					
		this.body = Bodies.rectangle(x, y, 30, 20, options);
		this.width = 140;
		this.height = 43;
		World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;		
			push()
			translate(pos.x, pos.y);
			
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			
			rectMode(CENTER)
			rect(0, -3, this.width, this.height);
			pop()
	}

}