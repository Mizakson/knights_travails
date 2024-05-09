// knights travails project

// 8 x 8 chess board
function createBoard() {
    let height = 8
    let width = height

    let board = []

    for (let i = 0; i < height; i++) {
        let row = []
        board.push(row)
        for (let j = 0; j < width; j++) {
            row.push(j)
        }
    }

    return board

}

const BOARD = createBoard()
// console.log(BOARD)

class Knight {
    constructor(position) {
        this.position = position
    }

    isValidPosition(position) {
        let height = position[0]
        let width = position[1]
        
        if (
            (height < 0 || height > (BOARD.length - 1)) 
            || ((width < 0 || width > (BOARD.length - 1)))
        ) return false

        return true

    }


    possibleMoves() {
        // adjacency list
        let list = []

        if (this.isValidPosition(this.position)) {
            let height = this.position[0]
            let width = this.position[1]

            let combinations = [[2, -1], [2, 1], [1, -2], [1, 2], [-2 , -1], [-2, 1], [-1 , 2], [-1 , -2]]

            for (let i = 0; i < combinations.length; i++) {
                let newPosition = [(height + (combinations[i][0])), (width + (combinations[i][1]))]
                if (this.isValidPosition(newPosition)) list.push(newPosition)
            }

            return list

        }

        if (!this.isValidPosition(this.position)) return false

    }

}



const PIECE = new Knight([0, 0])
console.log(PIECE.possibleMoves())