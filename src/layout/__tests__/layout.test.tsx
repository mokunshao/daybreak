import React from 'react';
import { render } from '@testing-library/react';
import { Aside } from '../aside';
import { Content } from '../content';
import { Footer } from '../footer';
import { Layout } from '../layout';
import { Header } from '../header';

function Example() {
  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Aside>aside</Aside>
        <Content>content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

describe('CodePreview', () => {
  it('exits', () => {
    expect(Aside).toBeTruthy();
    expect(Content).toBeTruthy();
    expect(Footer).toBeTruthy();
    expect(Layout).toBeTruthy();
    expect(Header).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});
