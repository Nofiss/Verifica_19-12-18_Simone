import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Example extends Component {       //classe del menu
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {  //funzione che ti permette di aprire la tendina nel menu quando lo schermo è piccolo 
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">   {/*assegno il colore al menu*/}
                    <NavbarBrand href="/">Home</NavbarBrand>  {/*logo del menu*/}
                    <NavbarToggler onClick={this.toggle} /> 
                    <Collapse isOpen={this.state.isOpen} navbar> {/*se llo schermo è piccolo, il menu diventa a tendina*/}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">About</NavLink>  {/*link del menu*/}
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>  {/*link del menu*/}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
