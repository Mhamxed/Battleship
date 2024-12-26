class Ship {
    constructor(id, length) {
        this.id = id
        this.length = length
        this.hitTimes = 0
    }

    hit() {
        this.hitTimes++
    }

    isSunk() {
        if (this.hitTimes >= this.length) {
            return true
        } else return false
    }
}

export default Ship;