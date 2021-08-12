    //functional component.

    import React from 'react';
    import PropTypes from 'prop-types';

    function CounterApp( {value} ){    //gracies a la desfragmentacio no ens cal ficar props, ni despres props.saludo


        return (     //ficar els elements html a un lloc que els contigui tots dins del fragment, es pot fer amb un div tambe, pero surtiria massa divs a la consola.
            <>  
                {/* <pre>{ JSON.stringify(objeto, null,3) }</pre>   es una forma de mostrar el que te dins del objecte */}
                <h1>CounterApp</h1> 
                <p>{ value }</p>
            </>

        );
    }

    CounterApp.propTypes = {        //declare el tipo de prop, si string o int
        value: PropTypes.number
    }

    export default CounterApp;  //exporte la funcio PrimeraApp per a que al index.js sigui usada.