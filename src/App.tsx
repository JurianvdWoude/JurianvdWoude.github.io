import {
  Routes,
  Route,
  NavLink,
} from 'react-router';
import Home from './pages/Home'
import Engine from './pages/Engine'
import Simulation from './pages/Simulation'

import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          Journey
        </NavLink>

        <NavLink to="/engine">
          Decision Engine
        </NavLink>

        <NavLink to="/simulation">
          Simulation
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/engine"
          element={<Engine />}
        />
        <Route
          path="/simulation"
          element={<Simulation />}
        />
      </Routes>
    </div>
  )
}

export default App
