import PropTypes from "prop-types";
import {Tile} from "./Tile.jsx";
import {store} from "../redux.store.js";
import {useDispatch} from "react-redux";

export const GameArea = ({tiles, disabled}) => {

    const setTiles = (index) => ({
        type: 'SET_TILES',
        index: index
    })

    const dispatch = useDispatch()

    const onSetTiles = (index) => {
        dispatch(setTiles(index))
    }

    return (
        <div className={'p-0.5 bg-black border-2 border-black gap-1 grid grid-cols-3'}>
            {tiles.map((value, i) => (
                <Tile
                    tile={value}
                    index={i}
                    setTile={onSetTiles}
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