    //functional component.

    import React, {useState} from 'react';
    import PropTypes from 'prop-types';

    function CounterApp( {value = 10} ){    //gracies a la desfragmentacio no ens cal ficar props, ni despres props.saludo

        const [counter, setCounter] = useState(value);  // es un array, sempre portara 2 valors, el normal y el set.


        function handleAdd(e) {
            setCounter( counter +1);
            // setCounter( (c) => c + 1);   mes endavant es veura utilitzan amb una funció.
        }

        function handleQuit(e) {
            setCounter(counter -1);
        }

        function reset(e) {
            setCounter(value);
        }

        return (     //ficar els elements html a un lloc que els contigui tots dins del fragment, es pot fer amb un div tambe, pero surtiria massa divs a la consola.
            <>  
                {/* <pre>{ JSON.stringify(objeto, null,3) }</pre>   es una forma de mostrar el que te dins del objecte */}
                <h1>CounterApp</h1> 
                <h2>{ counter }</h2>
                <button onClick={ handleAdd }>+1</button>
                <button onClick={ reset }>reset</button>
                <button onClick={ handleQuit }>-1</button>
            </>

        );
    }

    CounterApp.propTypes = {        //declare el tipo de prop, si string o int
        value: PropTypes.number
    }

    export default CounterApp;  //exporte la funcio PrimeraApp per a que al index.js sigui usada.