import { render } from "@testing-library/react";
import { PokemonListComponent } from '../../src/components/PokemonListComponent';


describe('Pruebas en <ButtonComponent />', () => {
    
    it('Debe hacer match con el snapshot', () => {
        const { container } = render( <PokemonListComponent simplePokemonList={[{ name:'example', id: 1, picture: 'http://example.com' }]} /> )
        
        expect( container ).toMatchSnapshot();
        // expect( screen.getByText( /Click me/i ) ).toBeInTheDocument();
    })

});