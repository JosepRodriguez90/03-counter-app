import { getUser, getUsuarioActivo } from  '../../base/05-funciones'
import '@testing-library/jest-dom';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objecto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );


    })


    test('getUsuarioActivo debe de retornar un objecto', () => {

        const nombre="Juan"
        const UsuarioActivo = getUsuarioActivo(nombre);

        expect( UsuarioActivo ).toEqual({
            uid: 'ABC567',
            username: nombre
        });


    })

})