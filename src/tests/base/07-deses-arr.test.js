import { retornaArreglo } from '../../base/07-deses-arr'

describe('Prueba en desestructuración', () => {


    test('debe de returnar un string y un número', () => {

        const [ letras, numeros] = retornaArreglo(); //['ABC', 123];

        //expect( arr ).toEqual(['ABC', 123]);

        expect ( letras ).toBe( 'ABC' );
        expect ( typeof letras ).toBe('string'); //comprova si es string

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' ); //comprova si es number
    })
})