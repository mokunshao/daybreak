import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

export default function () {
  return (
    <>
      <div>
        <h2>example 1</h2>
        <Layout style={{ height: 300, width: 500 }}>
          <Header className="xxx">header</Header>
          <Content className="yyy">content</Content>
          <Footer className="xxx">footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 2</h2>
        <Layout style={{ height: 300, width: 500 }}>
          <Header className="xxx">header</Header>
          <Layout>
            <Aside className="zzz">aside</Aside>
            <Content className="yyy">content</Content>
          </Layout>
          <Footer className="xxx">footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 3</h2>
        <Layout style={{ height: 300, width: 500 }}>
          <Header className="xxx">header</Header>
          <Layout>
            <Content className="yyy">content</Content>
            <Aside className="zzz">aside</Aside>
          </Layout>
          <Footer className="xxx">footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 4</h2>
        <Layout style={{ height: 300, width: 500 }}>
          <Aside className="zzz">aside</Aside>
          <Layout>
            <Header className="xxx">header</Header>
            <Content className="yyy">content</Content>
            <Footer className="xxx">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
