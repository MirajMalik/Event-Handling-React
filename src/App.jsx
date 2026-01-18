
import './App.css'

function App() {
  const handleClick = ()=> {
    alert('Be alert.')
  }

  return (
    <>
    <div className="button">
      <button onClick={handleClick}>Click Me</button>
    </div>

    <div className='red'>
       I am a red div.
    </div>
 
    </>
  )
}

export default App
