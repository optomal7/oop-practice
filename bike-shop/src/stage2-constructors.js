function Bike(name, price) {
  // your code here
  this.name = name;
  this.price = price;
  this.tires = [];
  this.tires[0] = new Tire();
  this.tires[1] = new Tire();
  this.frame = new Frame();
  this.rings = [3,7];
  this.brakes = {
    front: true,
    back: true
  };
}

function Frame(color, size, style) {
  // your code here
  this.color = color || "black";
  this.size = size || 55;
  this.style = style || "street";
}

function Tire(diameter, type) {
  // your code here
  this.diameter = diameter || 22;
  this.type = type || "street";
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
