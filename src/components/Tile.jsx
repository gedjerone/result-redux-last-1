import PropTypes from "prop-types";
import {FaRegCircle, FaXmark} from "react-icons/fa6";
export const Tile = ({tile, setTile, index, disabled }) => {
    const setValue = value => {
        if (value !== "X" && value !== "O") {
            return (
                <div className={'w-16 h-16'}></div>
            )
        }
        return (
            value === "X"
                ? <FaXmark color={'red'} size={'4rem'}/>
                : <FaRegCircle color={'blue'} size={'4rem'}/>
        )
    }

    return (
        <button className={'p-8 flex items-center justify-center bg-white'} disabled={disabled} onClick={() => (tile === "" && setTile(index))}>
            {setValue(tile)}
        </button>
    );
};

Tile.propTypes = {
    tile: PropTypes.string.isRequired,
    setTile: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired
}
