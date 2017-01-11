import React from 'react';

import { Page, Toolbar } from 'tatami';
import { JobCard } from '../components/job';

const DRAFT = (props) => {
  return (
    <Page>
      <Toolbar className="pageBar" icon="brush" title="Boceto: 0306 2019 0001 0006" />
      <JobCard ticket="0306 2019 0001 0006" title="Cartulina Folding 48x78"  motif="Nike" img="cartel1.jpeg"/>
    </Page>
  )
}

export default DRAFT;
