function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

let parkHotel = new Hotel('Park', 100, 39);
let quayHotel = new Hotel('Quay', 45, 22);

document.getElementById('hotelName').textContent = quayHotel.name;
document.getElementById('rooms').textContent = quayHotel.checkAvailability();