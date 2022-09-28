import React from 'react'

import { HeaderComponent } from '../components/HeaderComponent';
import { SectionPokemonsComponent } from '../components/SectionPokemonsComponent';

import '../index.css';

export const App = () => {
    return (
        <div>
            <HeaderComponent />
            <SectionPokemonsComponent />
        </div>
    )
}
