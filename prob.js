var car = {
make : "Audi",
model : "A5",
year : 2015,
color : "red",
passengers : 2,
power : 225,
odometer : 0
};
function haveRoadTrip ( my_car , distance ){
my_car . odometer += distance;
}
haveRoadTrip ( car , 150 );
console . log (car);