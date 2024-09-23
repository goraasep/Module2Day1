function areaOfRectangle(l: number, w: number) {
  console.log("Area of rectangle = " + l * w);
  console.log("==========");
}
function circleDetails(r: number) {
  let diameter: number = 2 * r;
  let circumference: number = 2 * 3.14 * r;
  let area: number = 3.14 * r * r;
  console.log("Circle details:");
  console.log("Diameter = " + diameter);
  console.log("Circumference = " + circumference);
  console.log("Area = " + area);
  console.log("==========");
}
function calcAngleOfTriangle(d1: number, d2: number) {
  let thirdAngle: number = 180 - (d1 + d2);
  console.log("Third angle = " + thirdAngle);
  console.log("==========");
}

function dateDiff(date1: string, date2: string) {
  const oneDay = 1000 * 60 * 60 * 24;
  const start = new Date(date1);
  const end = new Date(date2);
  const diffInTime = end.getTime() - start.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  console.log("Days difference = " + diffInDays);
  console.log("==========");
}

function getInitials(name: string) {
  let initials: string[] = name.split(" ");
  initials = initials.map((i) => {
    return i.charAt(0).toUpperCase();
  });
  console.log(initials);
  console.log("==========");
}

areaOfRectangle(2, 5);
circleDetails(5);
calcAngleOfTriangle(90, 50);
dateDiff("2024-03-19", "2024-03-21");
getInitials("John Doe");
