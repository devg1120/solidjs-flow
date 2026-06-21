import { createSignal } from 'solid-js'
import './App.css'
import  Simple  from './examples/Simple'
import  Increment  from './examples/Increment'
import  Actions  from './examples/Actions'
import  Timer  from './examples/Timer'

function App() {

  return (
    <>
        <div style={{"background-color": "#004c99",
                     "color": "white",
                     //"padding-top": "1px",
                     //"padding-left": "18px",
                     //"padding-bottom": "8px",
                     "position": "fixed",
                     "top": "0",
                     "left": "0",
                     "z-index": "9999",
		     "width": "100%",
		     "display": "flex",
		     "justify-content": "space-between",
            	 }}>

          <h1 style={{"padding-left": "18px",}} >solid-flow examples</h1>
           
	  <a style={{"padding-top": "35px", color: "white",}} href="#Simple">Simple</a>
	  <a style={{"padding-top": "35px", color: "white",}} href="#Increment">Increment</a>
	  <a style={{"padding-top": "35px", color: "white",}} href="#Actions">Actions</a>
	  <a style={{"padding-top": "35px", color: "white",}} href="#Timer">Timer</a>

	  <div style={{"padding-right": "18px",}} >
             <pre>https://github.com/miguelsalesvieira/solid-flow</pre>
	  </div>
        </div>

        <div style={{ }} >
            <div style={{ height: "100px", }}> </div>

            <a name="Simple" style={{"scroll-margin-top": "100px",}} ></a>
            <h2>Simple</h2>
              <Simple />

            <a name="Increment" style={{"scroll-margin-top": "100px",}} ></a>
            <h2>Increment</h2>
              <Increment/>

            <a name="Actions" style={{"scroll-margin-top": "100px",}} ></a>
            <h2>Actions</h2>
              <Actions/>

            <a name="Timer" style={{"scroll-margin-top": "100px",}} ></a>
            <h2>Timer</h2>
              <Timer/>
        </div>
    </>
  )
}

export default App
