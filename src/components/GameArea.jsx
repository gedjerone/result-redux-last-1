import PropTypes from "prop-types";
import {Tile} from "./Tile.jsx";
import {store} from "../redux.store.js";

export const GameArea = ({tiles, disabled}) => {

    const setTile = (index) => {
        store.dispatch({
            type: 'SET_TILES',
            index: index
        })
    }

    return (
        <div className={'p-0.5 bg-black border-2 border-black gap-1 grid grid-cols-3'}>
            {tiles.map((value, i) => (
                <Tile
                    tile={value}
                    index={i}
                    setTile={setTile}
                    disabled={disabled}
                    key={i}
                />
            ))}
        </div>
    )
}

GameArea.propTypes = {
    tiles: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    player: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired
}