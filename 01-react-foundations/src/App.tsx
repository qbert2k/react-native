import {BasicFunctions, BasicTypes, ObjectLiterals} from "./typescript";
import {Counter, CounterWithHook, FormsPage, LoginPage, UsersPage} from "./components";

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
            <hr/>
            <LoginPage/>
            <hr/>
            <UsersPage/>
            <hr/>
            <FormsPage/>
        </main>
    )
}

export default App
