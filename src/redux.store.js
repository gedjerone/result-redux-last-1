import {checkPlayer, checkWinner} from "./game.js";
import {legacy_createStore as createStore} from "redux";

const area = (state = {
    tiles: Array(9).fill(""),
    player: true,
    winner: ""
}, action) => {
    const _arr = [...state.tiles]
    let _winner
    switch (action.type) {
        case 'SET_TILES':
            _arr[action.index] = checkPlayer(state.player)
            _winner = checkWinner(_arr)
            return {
                tiles: _arr,
                player: !state.player,
                winner: _winner
            }
        case 'SET_INITIAL':
            _arr[action.index] = checkPlayer(state.player)
            _winner = checkWinner(_arr)
            return {
                tiles: Array(9).fill(""),
                player: true,
                winner: ""
            }
        default:
            return state
    }
}

export const store = createStore(area)