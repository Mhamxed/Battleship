class Ship {
    constructor(id, length) {
        this.id = id
        this.length = length
        this.hitTimes = 0
    }

    hit() {
        this.hitTimes++
    }
}

export default Ship;