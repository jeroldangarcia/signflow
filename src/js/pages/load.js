import React from 'react';
import Page from '../components/page';
import Header from '../components/header';

const Load = (props) => {

  const goto = () => {
    props.goto('PROMOTIONS');
  }

  const header = <Header title="iDossiers" icon="folder"></Header>

  return (
    <Page className="nopage">
      <h1>Load</h1>
      <button onMouseUp={goto}>next</button>
    </Page>
  );
};

export default Load;
