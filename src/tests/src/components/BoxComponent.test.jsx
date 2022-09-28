import { render } from "@testing-library/react";
import { BoxComponent } from '../../../components/BoxComponent';

describe('Pruebas en <BoxComponent />', () => {
    
    it('Debe hacer match con el snapshot', () => {
        const { container } = render( <BoxComponent /> )
        
        expect( container ).toMatchSnapshot();
        // expect( screen.getByText( /Click me/i ) ).toBeInTheDocument();
    })

});