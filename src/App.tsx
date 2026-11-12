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
  const linkClasses = ({ isActive }) => [
    "px-8 py-4 rounded-2xl",
    "text-lg font-semibold",
    "border-2",
    "transition-all duration-200",
    isActive
      ? "bg-lime-400 border-lime-400 text-slate-900 shadow-sm"
      : "bg-white border-slate-900 text-slate-900 hover:bg-slate-100",
  ].join(" ");
  return (
    <div className="App">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="flex items-center gap-4">
           <NavLink
              to="/"
              className={""}
            >
              <img
                src={`logo.png`}
                alt="Go!Rillas"
                className="h-16 w-auto"
              />
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={linkClasses}
            >
              Journey
            </NavLink>

            <NavLink
              to="/engine"
              className={linkClasses}
            >
              Decision Engine
            </NavLink>

            <NavLink
              to="/simulation"
              className={linkClasses}
            >
              Simulation
            </NavLink>
          </div>
        </div>
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
