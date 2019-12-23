import React from 'react';
import './layout.scss';
import Aside from './aside';
import Header from './header';
import Footer from './footer';
import Content from './content';
interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    children: React.ReactElement | Array<React.ReactElement>;
}
declare const Layout: React.FunctionComponent<Props>;
export default Layout;
export { Layout, Header, Aside, Content, Footer, };
//# sourceMappingURL=layout.d.ts.map