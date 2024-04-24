import {BasicFunctions, BasicTypes, ObjectLiterals} from "./typescript";
import {Counter, CounterWithHook} from "./components";

function App() {

    return (
        <main>
            <h1>TS React</h1>

            <BasicTypes/>
            <hr/>
            <ObjectLiterals/>
            <hr/>
            <BasicFunctions/>
            <hr/>
            <Counter/>
            <hr/>
            <CounterWithHook/>
        </main>
    )
}

export default App
