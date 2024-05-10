// knights travails

const combinations = [
    [1, 2], [1, -2], [2, 1], [2, -1],
    [-1, 2], [-1, -2], [-2, 1], [-2, -1],
]

class Node {
    constructor(x, y, dist = 0, prev = null) {
        this.x = x
        this.y = y
        this.dist = dist
        this.prev = prev
    }
}


class Queue {
    constructor() {
        this.items = []
    }

    enqueue(object) {
        this.items.push(object)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        if (this.items.length === 0) return true
        return false
    }

}


function makeBoard() {
    let board = []
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.push([i, j])
        }
    }
    return board
}

const board = makeBoard()


function possibleValidMoves(node) {
    let validMoves = []

    combinations.forEach((el) => {
        // apply combination to current el
        let curr = new Node(node.x + el[0], node.y + el[1])

        board.forEach((box) => {
            // if moves are equal push to validMoves
            if (curr.x == box[0] && curr.y == box[1]) validMoves.push(curr)
        })

    })

    return validMoves

}


function displayMoves(curr) {
    let moves = []

    while (curr !== null) {
        // go back up and get the first move and then print them
        moves.unshift(`[${curr.x}, ${curr.y}]`)
        curr = curr.prev
    }

    return moves

}


function knightMoves(start, end) {
    // use queue + BFS
    let q = new Queue()

    // add node to q
    q.enqueue(new Node(start[0], start[1]))

    while (!q.isEmpty()) {
        let curr = q.dequeue()

        if (curr.x == end[0] && curr.y == end[1]) {
            return `You made it in ${curr.dist} moves... \n
            Path: ${displayMoves(curr)}
            `
        }

        possibleValidMoves(curr).forEach((el) => {
            el.prev = curr
            el.dist = curr.dist + 1
            q.enqueue(el)
        })

    }
}


console.log(knightMoves([2, 1], [7, 7]))