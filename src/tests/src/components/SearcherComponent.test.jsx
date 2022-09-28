import { render } from "@testing-library/react";
import { SearcherComponent } from '../../../components/SearcherComponent'

describe('Pruebas en <ButtonComponent />', () => {
    
    it('Debe hacer match con el snapshot', () => {
        const { container } = render( <SearcherComponent /> )
        
        expect( container ).toMatchSnapshot();
        // expect( screen.getByText( /Click me/i ) ).toBeInTheDocument();
    })

});