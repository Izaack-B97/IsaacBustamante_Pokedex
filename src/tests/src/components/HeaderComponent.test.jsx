import { render } from "@testing-library/react";
import { HeaderComponent } from '../../../components/HeaderComponent'

describe('Pruebas en <ButtonComponent />', () => {
    
    it('Debe hacer match con el snapshot', () => {
        const { container } = render( <HeaderComponent /> )
        
        expect( container ).toMatchSnapshot();
        // expect( screen.getByText( /Click me/i ) ).toBeInTheDocument();
    })

});