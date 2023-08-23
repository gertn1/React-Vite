import './app.css'
import Foto2 from './assets/Foto2.jpg'



function App() {
 

  return (
    <>
    <h1 className='titulo'>Itens mais vendidos</h1>
    
   <div className='conteiner'>
    <img className = "tenis" src={Foto2} />
    <p className='descricao'> Tenis Básico <span>$35</span></p>
   
   </div>
    </>
  )
}

export default App
