import { useState } from 'react';

const Contador = () => {
  const [ contador, setContador] = useState(0);

  const decremento = () => {
    if(contador>0){
      setContador(contador-1);
    }
  }
  const incremento = () => {
    setContador(contador+1);
  }

  return(
    <div className='flex-contenedor'>
      <div>
        <button
          className='btn'
          onClick={decremento}
          >-</button>
      </div>
      <div className='pantalla-contador'>{contador}</div>
      <div>
        <button
          className='btn'
          onClick={incremento}
        >+</button>
      </div>
    </div>
  );
}

export default Contador;