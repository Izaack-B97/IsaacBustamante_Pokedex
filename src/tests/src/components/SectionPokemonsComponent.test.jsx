import { render } from "@testing-library/react";
import { SectionPokemonsComponent } from '../../../components/SectionPokemonsComponent';

describe('Pruebas en <SectionPokemonComponent />', () => {
    
    it('Debe hacer match con el snapshot', () => {
        const { container } = render( <SectionPokemonsComponent /> )
        
        expect( container ).toMatchSnapshot();
        // expect( screen.getByText( /Click me/i ) ).toBeInTheDocument();
    })

});