import React from 'react';
import './page.scss';

const Page = (props) => (
  <div className="page">
    <aside>
      {props.drawer}
    </aside>
    <main>
      {props.header}
      <article className={props.className}>
        {props.children}
      </article>
    </main>
  </div>
);

export default Page;
