import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, NavLink, Link,
} from 'react-router-dom';
import './example.scss';
import {
  Layout, Header, Aside, Content,
} from '../src/layout/layout';
import IconExample from './examples/icon.example';
import DialogExample from './examples/dialog.example';
import LayoutExample from './examples/layout.example';
import FormExample from './examples/form.example';
import ButtonExample from './examples/button.example';
import CheckboxExample from './examples/checkbox.example';
import RadioExample from './examples/radio.example';
import SwitchExample from './examples/switch.example';
import inputExample from './examples/input.example';
import RatingExample from './examples/rating.example';
import Home from './home';
import MaskedInputExample from './examples/masked-input.example';
import PaginationExample from './examples/pagination.example';

ReactDOM.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header"><Link to="/"><div className="logo">Daybreak</div></Link></Header>
      <Layout>
        <Aside className="site-aside">
          <NavLink className="site-aside-link" to="/" exact>Home</NavLink>
          <NavLink className="site-aside-link" to="/icon">Icon</NavLink>
          <NavLink className="site-aside-link" to="/dialog">Dialog</NavLink>
          <NavLink className="site-aside-link" to="/layout">Layout</NavLink>
          <NavLink className="site-aside-link" to="/form">Form</NavLink>
          <NavLink className="site-aside-link" to="/button">Button</NavLink>
          <NavLink className="site-aside-link" to="/checkbox">Checkbox</NavLink>
          <NavLink className="site-aside-link" to="/radio">Radio</NavLink>
          <NavLink className="site-aside-link" to="/switch">Switch</NavLink>
          <NavLink className="site-aside-link" to="/input">Input</NavLink>
          <NavLink className="site-aside-link" to="/rating">Rating</NavLink>
          <NavLink className="site-aside-link" to="/masked-input">Masked Input</NavLink>
          <NavLink className="site-aside-link" to="/pagination">Pagination</NavLink>
        </Aside>
        <Content className="site-content">
          <Route path="/" exact component={Home} />
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/checkbox" component={CheckboxExample} />
          <Route path="/radio" component={RadioExample} />
          <Route path="/switch" component={SwitchExample} />
          <Route path="/input" component={inputExample} />
          <Route path="/rating" component={RatingExample} />
          <Route path="/masked-input" component={MaskedInputExample} />
          <Route path="/pagination" component={PaginationExample} />
        </Content>
      </Layout>
    </Layout>
  </Router>
), document.querySelector('#root'));
