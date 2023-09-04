import Body from "./components/Body"
import Navbar from "./components/Navbar"
import { Provider } from 'react-redux';
import { store } from './store/store'
function App() {

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Body />
      </div>
    </Provider>

  )
}

export default App
