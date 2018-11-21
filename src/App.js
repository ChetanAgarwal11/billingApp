import React, { Component } from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from './Products';
import Home from './Home';
import Login from './Login';
import About from './About';

class App extends Component {
  state = { activeItem: 'home'}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

  render() {
    const { activeItem } = this.state

    return (
      <Router>
            <Segment inverted>
                <Menu inverted pointing secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/" />
                <Menu.Item as={Link} to='/products'
                    name='products'
                    active={activeItem === 'products'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item as={Link} to="/about"
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item as={Link} to="/login"
                    name='sign in / sign up'
                    active={activeItem === 'sign in / sign up'}
                    onClick={this.handleItemClick}
                    position = 'right'
                />
                </Menu>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/login" component={Login} />
            </Segment>
        </Router>
        
    );
  }
}

export default App;
