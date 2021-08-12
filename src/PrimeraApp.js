    //functional component.

    import React, { Fragment } from 'react';
    import PropTypes from 'prop-types';

    function PrimeraApp( {saludo, subtitulo = 'Soy un subtitulo'} ){    //gracies a la desfragmentacio no ens cal ficar props, ni despres props.saludo

        const array = [5,9,8,9,1];

        const objeto = {
            nombre: 'Josep Rodríguez',
            edad:31
        }

        return (     //ficar els elements html a un lloc que els contigui tots dins del fragment, es pot fer amb un div tambe, pero surtiria massa divs a la consola.
            <Fragment>  
                {/* <pre>{ JSON.stringify(objeto, null,3) }</pre>   es una forma de mostrar el que te dins del objecte */}
                <h1>{saludo}</h1> 
                <p>{ subtitulo }</p>
            </Fragment>

        );
    }

    PrimeraApp.propTypes = {        //declare el tipo de prop, si string o int
        saludo: PropTypes.string.isRequired
    }

    PrimeraApp.defaultProps = {     //declare el valor del prop per defecte
        subtitulo: 'Soy un subtitulo'
    }

    export default PrimeraApp;  //exporte la funcio PrimeraApp per a que al index.js sigui usada.