import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [incremento, setInfremento] = useState(0);
    const [decremento, seTdecremento] = useState(0);

    return(
        <div>
            <div>{contador}</div>
        </div>
    );
}

export default Contador;