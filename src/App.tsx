import { Button } from 'primereact/button';
import './App.css'

function App() {

  return (
    <>
      <h1 className='lg:bg-[#e76857] md:bg-[#8e57e7] sm:bg-[#6fe757] bg-[#57a1e7] px-4 py-8 border-4 border-solid rounded border-black text-white'>Projeto Final 2024</h1>

      <Button 
        label="SuperStar" 
        icon= "pi pi-star-fill"
        severity= "success"
      />
    </>
  )
}
export default App