import logo from './logo.svg';
import './App.css';
import Matrix from './components/Matrix';
import ControlPanel from './components/ControlPanel';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// library.add(fas, faFontAwesome)
library.add(fas, far);

function App() {

  return (
    <div className="App">
      <h1>Christmas Lights Kata    <FontAwesomeIcon icon="fa-solid fa-star" />
      </h1>
      <div className="controlp">
        <ControlPanel></ControlPanel>
      </div>
      <div className="matrix">
        <Matrix></Matrix>
      </div>
    </div>
  );
}

export default App;
