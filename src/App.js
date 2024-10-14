import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseStateDemo from './component/UseState/UseStateDemo.js';
import ErrorState from './component/UseState/Error-state-demo.js';
import UseDateObject from './component/UseState/Object-useSate.js';
import UseArray from './component/UseState/UseSatte-Array.js';
import UseEffectBasic from './component/UseEffect/basic-UseEffect.js';
import CleanUpEffect from './component/UseEffect/cleanUp_useEffect.js';
import FetchData from './component/UseEffect/fetchData-UseEffect.js';
import MultiReturn from './component/Conditional-rendering/multi-return.js';
import ShowHide from './component/Conditional-rendering/show-hide.js';
import ConstrolledInput from './component/forms/controlled-Inputs.js';
import MultipalInputs from './component/forms/multipal-inputs.js';
import UseReducer from './component/UseReducer/index.js';
import UseRefbasic from './component/UseRef/useRef-basic.js';
import PropDrilling from './component/PropDrilling/index.js';
import ContextAPI from './component/ContextAPI/index.js'
import CustomHook from './component/CustomHooks/index.js';
import PropsType from './component/PropsType/index.jsx';
import Home from './component/Home/index.js'
import Navbar from './component/Navbar/index.jsx'
import WithOutOptimizations from './component/WithOut-Optimizations/index.jsx'
import WithOptimizations from './component/With-Optimization/index.jsx'
import UseImperativeHandle  from "./component/UseImperativeHandle/index.jsx";
import './App.css'; // Assuming you have the styles in this file

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        {/* <nav className="sidebar">
          <ul>
            <p>--: UseState</p>
            <li><Link to="/usestate">UseState-counter</Link></li>
            <li><Link to="/error-usestate">Error-useState</Link></li>
            <li><Link to="/object-usestate">object-useState</Link></li>
            <li><Link to="/array-useSate">Array-useState</Link></li>
            <p>--: UseEffect</p>
            <li><Link to="/basic-useEffect">Basic-useEffect</Link></li>
            <li><Link to="/cleanUp-useEffect">cleanUp-useEffect</Link></li>
            <li><Link to="/fetchData-useEffect">FetchData-useEffect</Link></li>
            <p>--: Conditionalrendering</p>
            <li><Link to="/multireturn-useEffect">Multireturn-useEffect</Link></li>
            <li><Link to="/showHide-useEffect">ShowHide-useEffect</Link></li>
            <p>--: Forms</p>
            <li><Link to='/constrolled-input'>constrolled-input</Link></li>
            <li><Link to='/multipal-inputs'>multipal-inputs</Link></li>
            <p>--: UseRef</p>
            <li><Link to='/useRef-basic'>useRef-basic</Link></li>
            <p>--: UseReducer</p>
            <li><Link to='/usereducer'>useReducer</Link></li>
            <p>--: PropDrilling</p>
            <li><Link to='/prodrilling'>Prop-Drillig</Link></li>
            <p>--: ContextAPI</p>
            <li><Link to='/contextAPI'>ContextAPI</Link></li>
            <p>--: CustomHook</p>
            <li><Link to='/customHook'>CustomHook</Link></li>
            <p>--: PropsType</p>
            <li><Link to='/propsType'>PropsType</Link></li>
          </ul>
        </nav> */}

        <div className="content">
          <Routes>
            <Route path="/usestate" element={<UseStateDemo />} />
            <Route path="/error-usestate" element={<ErrorState />} />
            <Route path="/object-usestate" element={<UseDateObject />} />
            <Route path="/array-useSate" element={<UseArray />} />
            <Route path="/basic-useEffect" element={<UseEffectBasic />} />
            <Route path="/cleanUp-useEffect" element={<CleanUpEffect />} />
            <Route path="/fetchData-useEffect" element={<FetchData />} />
            <Route path="/multireturn-useEffect" element={<MultiReturn />} />
            <Route path="/showHide-useEffect" element={<ShowHide />} />
            <Route path="/constrolled-input" element={<ConstrolledInput />} />
            <Route path="/multipal-inputs" element={<MultipalInputs />} />
            <Route path="/useRef-basic" element={<UseRefbasic />} />
            <Route path="/usereducer" element={<UseReducer />} />
            <Route path="/prodrilling" element={<PropDrilling />} />
            <Route path="/contextAPI" element={<ContextAPI />} />
            <Route path="/CustomHook" element={<CustomHook />} />
            <Route path="/propsType" element={<PropsType />} />
            <Route path= "/without-optimizations" element={<WithOutOptimizations />} />
            <Route path= "/with-optimizations" element={<WithOptimizations />} />
            <Route path="/UseImperativeHandle" element={<UseImperativeHandle />} />  
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
