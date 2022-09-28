import { render } from "react-dom";
import { CardInfoComponent } from '../../../components/CardInfoComponent';


describe('Pruebas en <ButtonComponent />', () => {
    
    it('Debe hacer match con el snapshot', () => {
        const { container } = render( <CardInfoComponent /> )
        
        expect( container ).toMatchSnapshot();
        // expect( screen.getByText( /Click me/i ) ).toBeInTheDocument();
    })

});