class Ship {
    constructor(name, length, hitTimes, isSunk) {
        this.name = name
        this.length = length
        this.hitTimes = hitTimes
        this.isSunk = isSunk
    }

    hit() {
        this.hitTimes =+ 1
    }

    isSunk() {
        if (this.hitTimes >= this.length) {
            return true
        } else {
            return false
        }
    }
}

export default Ship;