import { render, screen } from "@testing-library/react";
import { ButtonComponent } from "../../../components/ButtonComponent";

describe('Pruebas en <ButtonComponent />', () => {
    
    it('Debe hacer match con el snapshot', () => {
        const { container } = render( <ButtonComponent text="Click me" /> )
        
        expect( container ).toMatchSnapshot();
        // expect( screen.getByText( /Click me/i ) ).toBeInTheDocument();
    })

});