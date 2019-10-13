import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './example.scss';
import {
  Layout, Header, Aside, Content,
} from './lib/layout/layout';
import IconDemo from './lib/icon/icon.demo';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';

ReactDOM.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header"><div className="logo">Daybreak</div></Header>
      <Layout>
        <Aside className="site-aside">
          <NavLink className="site-aside-link" to="/icon">Icon</NavLink>
          <NavLink className="site-aside-link" to="/dialog">Dialog</NavLink>
          <NavLink className="site-aside-link" to="/layout">Layout</NavLink>
          <NavLink className="site-aside-link" to="/form">Form</NavLink>
        </Aside>
        <Content className="site-content">
          <Route path="/icon" component={IconDemo} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
        </Content>
      </Layout>
    </Layout>
  </Router>
), document.querySelector('#root'));
