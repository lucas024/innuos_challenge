import './App.css';
import Root from './components/Root'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer'


const App = () => {

  const store = createStore(reducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Root/>
      </Provider>
      
    </div>
  )
}

export default App;
