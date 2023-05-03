import { Routes,Route} from 'react-router-dom';
import './App.css'

import { Home, Topic, SubTopic } from './pages';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path=':topic' element={<Topic/>}>
          <Route path=':subtopic' element={<SubTopic/>}/>
        </Route>
      </Route>
      
    </Routes>
  );
}

export default App
