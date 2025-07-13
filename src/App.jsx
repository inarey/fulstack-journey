import Eigakan from "./components/eigakan"
import PizzaMaker from "./components/PizzaMaker"


function App() {

  return (
    <>
      <div className='bg-slate-950 mx-auto text-center py-4'>
        <h1 className="text-slate-300 text-6xl">Journey to Fullstack Projects</h1>
        <Eigakan />
        <PizzaMaker />
      </div>
    </>
  )
}

export default App
