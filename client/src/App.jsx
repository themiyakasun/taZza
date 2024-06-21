import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Products, Auth } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='font-barlow'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
