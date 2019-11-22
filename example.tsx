import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, NavLink, Link,
} from 'react-router-dom';
import './example.scss';
import {
  Layout, Header, Aside, Content,
} from './lib/layout/layout';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import ButtonExample from './lib/button/button.example';
import CheckboxExample from './lib/checkbox/checkbox.example';

ReactDOM.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header"><Link to="/"><div className="logo">Daybreak</div></Link></Header>
      <Layout>
        <Aside className="site-aside">
          <NavLink className="site-aside-link" to="/icon">Icon</NavLink>
          <NavLink className="site-aside-link" to="/dialog">Dialog</NavLink>
          <NavLink className="site-aside-link" to="/layout">Layout</NavLink>
          <NavLink className="site-aside-link" to="/form">Form</NavLink>
          <NavLink className="site-aside-link" to="/button">Button</NavLink>
          <NavLink className="site-aside-link" to="/checkbox">Checkbox</NavLink>
        </Aside>
        <Content className="site-content">
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/checkbox" component={CheckboxExample} />
        </Content>
      </Layout>
    </Layout>
  </Router>
), document.querySelector('#root'));
