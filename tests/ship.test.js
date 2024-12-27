import Ship from '../src/ship'

const aircraft = new Ship(0, 5)
it ('ship id', () => {
    expect(aircraft.id).toBe(0)
})

it ('ship lenght', () => {
    expect(aircraft.length).toBe(5)
})

it ('ship hit function which adds 1 to ship.hitTimes every time it gets called', () => {
    aircraft.hit()
    expect(aircraft.hitTimes).toBe(1)
})

it ('ship isSunk func which return true if a ship has sunk', () => {
    aircraft.hit()
    aircraft.hit()
    aircraft.hit()
    aircraft.hit()
    aircraft.hit()
    aircraft.hit()
    expect(aircraft.isSunk()).toBe(true)
})

