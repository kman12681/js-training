let hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    },
};

document.getElementById('hotelName').textContent = hotel.name;
document.getElementById('rooms').textContent = hotel.checkAvailability();