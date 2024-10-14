import React from 'react'
import { Link } from "react-router-dom";

const Index = () => {
  return (
            <nav className="sidebar">
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
            <p>--: UseCalled& UseMemo</p>
            <li><Link to='/without-optimizations'>without-optimizations</Link></li>
            <li><Link to='/with-optimizations'>with-optimizations</Link></li>
            <p>--: UseImperativeHandle</p>
            <li><Link to='/UseImperativeHandle'>UseImperativeHandle</Link></li>
          </ul>
        </nav>
  )
}

export default Index