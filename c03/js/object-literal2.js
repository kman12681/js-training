let hotel = {
  name: 'Park',
  rooms: 120,
  booked: 22,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

document.getElementById('hotelName').textContent = hotel.name;
document.getElementById('rooms').textContent = hotel.checkAvailability();

