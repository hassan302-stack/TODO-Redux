import TodoCount from "./TodoCount"
import TodoTitle from "./TodoTitle"
import TodoBody from './TodoBody'
import { Provider } from "react-redux";
import Store from "./Store";

function App() {
  return (
   <>
   <div className="container">
   <Provider store= {Store}>
     <TodoCount />
     <TodoTitle />
     <TodoBody />
     </Provider>
     </div>
   </>
   
  );
}

export default App;
