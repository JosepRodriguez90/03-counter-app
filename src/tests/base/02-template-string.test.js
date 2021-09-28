import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en el 02-template-string.js', () => {

    test('getSaludo debe de retornar hola fernando', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );

        getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!');

    })


    
    test('getSaludo debe retornar Hola Carlos!, si no hay argumento', () => {
        const nombre = 'Carlos';

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!');

    })

})


// a la consola: npm run test, despres fiques la lletra P, i pots buscar el unic arxiu que vols que faci la prova en comptes de tots.