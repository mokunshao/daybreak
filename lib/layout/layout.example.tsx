import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
  return (
    <>
      <div>
        <h2>example 1</h2>
        <Layout style={{ height: 300 }}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 2</h2>
        <Layout style={{ height: 300 }}>
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 3</h2>
        <Layout style={{ height: 300 }}>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 4</h2>
        <Layout style={{ height: 300 }}>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
