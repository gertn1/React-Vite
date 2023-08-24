import './app.css'
import Foto1 from './assets/Foto1.jpg'
import Foto2 from './assets/Foto2.jpg'
import Foto3 from './assets/Foto3.jpg'
import Foto4 from './assets/Foto4.jpg'



function App() {
 

  return (
    <>
    <h1 className='titulo'>Itens mais vendidos</h1>
    
   <div className='conteiner'>
    <img className = "imagens" src={Foto1} />
    <p className='descricao'> Tênis Nike Revolution 6<span>$35</span></p>
    <p>branco</p>
   </div>

   <div className='conteiner'>
    <img className = "imagens" src={Foto2} />
    <p className='descricao'> Tênis Nike Air Max SYSTM <span>$35</span></p>
    <p>vermelho</p>
   </div>
   <div className='conteiner'>
    <img className = "imagens" src={Foto3} />
    <p className='descricao'> Terno Slim Kit Completo De Luxo<span>$35</span></p>
    <p>branco</p>
   </div>

   <div className='conteiner'>
    <img className = "imagens" src={Foto4} />
    <p className='descricao'> Camisas Completo De Luxo<span>$35</span></p>
    <p>varias cores</p>
   </div>
   
    </>
  )
}

export default App
