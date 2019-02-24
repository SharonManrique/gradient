import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import Granim from 'react-granim'

const Title = styled.div`
    font-size: 10rem;
    position: absolute; 
    height: 90vh;
    top: 42%; 
    font-family: 'Helvetica Neue', sans-serif; 
    font-weight: bold; 
    letter-spacing: -1px; 
    line-height: 1;
`;

const NavBar = styled.div`
    width: 100%; 
    height: 10rem; 
    background-color: #FFFFFF; 
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    position: fixed; 
    ${({ isStyleSticky }) => isStyleSticky ? "top: 0" : "bottom: 0"};
    ${({ isStyleOpacity }) => isStyleOpacity ? "opacity: 1" : "oppacity: 0.1"};
`;

const NavBarOptions = styled.div`
    color: #00416A;
    align-content: center;
    ont-family: 'Open Sans', sans-serif; 
    font-size: 30px; 
    font-weight: bold; 
    line-height: 5rem; 
    text-align: center;
`;

const Body = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex; 
    justify-content: center; 
    align-content: center; 
`;

class NavBarComplete extends React.Component {
    render() {
        return (
            <NavBar isStyleSticky={this.props.isSticky} isStyleOpacity={this.props.isOpaque}>
                <NavBarOptions>Hello</NavBarOptions>
                <NavBarOptions>About</NavBarOptions>
                <NavBarOptions>Welcome</NavBarOptions>
            </NavBar>
        )
    }
}

class GradientBackgroundAnimation extends React.Component {
    render() {
        const opacity = [0.7, 0.5, 1]
        const states = {
            "default-state": {
                gradients: [
                    ['#C6FFDD', '#FBD786', '#f7797d',],
                    ['#00416A', '#799F0C', '#FFE000',]
                ],
                transitionSpeed: 5000,
                loop: true
            }
        }
        return (
            <div >
                <Granim id="granim" states={states} direction='left-right' stateTransitionSpeed={10000} opacity={opacity}
                ></Granim>
            </div >
        )
    }
}

class PageTwo extends React.Component {
    render() {
        return (
            <div>
                <Body></Body>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavSticky: false,
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll() {
        const pageY = window.scrollY;

        if (pageY > 100 && !this.state.isSticky) {
            this.setState({ isNavSticky: true })
        }

        else {
            this.setState({ isNavSticky: false })
        }

        console.log(pageY)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }
    render() {
        return (
            <div>
                <Body>
                    <Title> HELLO WORLD! </Title>
                    <NavBarComplete
                        isSticky={this.state.isNavSticky}
                        isOpaque={this.state.isNavSticky}
                    />
                    <GradientBackgroundAnimation />
                </Body>
                <PageTwo />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);