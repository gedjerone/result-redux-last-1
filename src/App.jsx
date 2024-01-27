import {GameArea} from "./components/GameArea.jsx";
import {Display} from "./components/Display.jsx";
import {useSelector} from "react-redux";
const App = () => {

    const tiles = useSelector((state) => state.tiles)
    const player = useSelector((state) => state.player)
    const winner = useSelector((state) => state.winner)

    return (
    <>
     <div className={'flex flex-col p-4 justify-center items-center'}>
        <h1>Tic Tac Toe Game React Redux</h1>
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