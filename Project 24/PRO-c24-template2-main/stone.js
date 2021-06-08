class Stone{
	constructor(x,y)
	{
		var options = {'restitution': 0.8,
						'friction': 0.9,
					'density':12};
					
		this.body = Bodies.rectangle(x, y, 30, 20, options);
		this.width = 50;
		this.height = 50;
		World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;		
			push()
			translate(pos.x, pos.y);
			
			strokeWeight(4);
			stroke("red");
			fill("brown");
			
			rectMode(CENTER)
			rect(0, -10, this.width, this.height);
			pop()
	}

}



