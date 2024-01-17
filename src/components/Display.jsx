import PropTypes from "prop-types";
import {checkPlayer} from "../game.js";
import {FaArrowRotateLeft} from "react-icons/fa6";
import {store} from "../redux.store.js";

export const Display = ({winner, player}) => {
    const resetGame = () => {
        store.dispatch({
            type: 'SET_INITIAL',
        })
    }

    return (
        <div className={'mb-4 flex flex-col items-center'}>
            {
                winner
                    ? (
                        <div className={'flex flex-row gap-4 items-center'}>
                            <button
                                className={'px-4 py-4 rounded-full'}
                                onClick={() => resetGame()}>
                                <FaArrowRotateLeft className={'hover:text-blue-600 text-2xl'}/>
                            </button>
                        <p
                            className={'font-normal text-2xl '.concat(winner === "X" ? 'text-red-600' : 'text-blue-600')}
                        > {winner !== "Draw" ? `Winner: ${winner}` : `Draw`} </p>
                    </div>
                    ) : (
                        <h2 className={'font-normal '.concat(player ? 'text-red-600' : 'text-blue-600')}>Turn: {checkPlayer(player)}</h2>
                    )
            }
        </div>
    )
}

Display.propTypes = {
    winner: PropTypes.string.isRequired,
    player: PropTypes.bool.isRequired,
}