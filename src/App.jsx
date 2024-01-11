import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersistentDrawerLeft from './components/PersistentDrawerLeft'
import Home from './pages/Home/index';
import Car from './pages/Car/index';
import NotFound from './pages/NotFound/index';

function App() {


  return (
    <Router>
      <PersistentDrawerLeft />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App
