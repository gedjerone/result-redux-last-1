import {useState} from "react";
import {GameArea} from "./components/GameArea.jsx";
import {Display} from "./components/Display.jsx";
import {store} from "./redux.store.js";
const App = () => {
    store.subscribe(() => {
        setTiles(store.getState().tiles)
        setPlayer(store.getState().player)
        setWinner(store.getState().winner)
    })

    const [tiles, setTiles] = useState(store.getState().tiles)
    const [player, setPlayer] = useState(store.getState().player)
    const [winner, setWinner] = useState(store.getState().winner)

    return (
    <>
     <div className={'flex flex-col p-4 justify-center items-center'}>
        <h1>Tic Tac Toe Game React</h1>
         <div className={'mt-8 bg-white px-12 py-8 rounded-2xl shadow-[0px_20px_20px_10px_#00000024] border-4'}>
             <Display
                 winner={winner}
                 player={player}
             />
            <GameArea
                tiles={tiles}
                player={player}
                disabled={!!winner}
            />
         </div>
     </div>
    </>
  )
}

export default App