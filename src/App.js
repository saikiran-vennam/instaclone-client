import Insta from "./InstaPage";
import Landing from './Landing_Page';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Posting from "./posting/posting";


const App = () => {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/InstaPage' element={<Insta/>}/>
          <Route exact path='/posting' element={<Posting/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
