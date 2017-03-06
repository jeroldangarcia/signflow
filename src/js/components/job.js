import React from 'react';
import {Icon, Tabs, Tab} from 'seito';
import './jobs.scss';

const JobItem = (props) => {

  return(
        <div className="jobitem" onMouseUp={props.onSelection}>
          <br/>
          <header>
            <aside>
              <Icon className="small" icon="receipt" />
            </aside>
            <section style={{ display: 'flex' }}>
              <span style={{ flex: 1 }}>#{props.ticket}</span>
            </section>
          </header>

          <main>
            <aside>
              <Icon className="thumb" icon="burst_mode" />
            </aside>
            <section>
              <span className="title">{props.title}</span>
              <span>{props.motif}</span>
              <div className="buttonBar" style={{ display: 'flex', justifyContent: 'flex-end', color: '#CCC'}}>
                <Icon icon="person" />
                <Icon icon="file_upload" />
                <Icon icon="done" />
                <Icon icon="cloud_done" />
              </div>
            </section>
          </main>
        </div>
  )
}

const JobCard = (props) => {

  return (
    <div className="jobitem">

      <div style={{ maxHeight: '20rem', overflow: 'hidden' }}>
        <img src={props.img} width="100%"/>
      </div>

      <br/>

      <header>
        <aside>
          <Icon className="small" icon="receipt" />
        </aside>
        <section style={{ display: 'flex' }}>
          <span style={{ flex: 1 }}>#{props.ticket}</span>
        </section>
      </header>

      <main>
        <aside>
          <Icon className="thumb" icon="burst_mode" />
        </aside>
        <section>
          <span className="title">{props.title}</span>
          <span>{props.motif}</span>
          <div className="buttonBar" style={{ display: 'flex', justifyContent: 'flex-end', color: '#CCC'}}>
            <Icon icon="person" />
            <Icon icon="file_upload" />
            <Icon icon="done" />
            <Icon icon="cloud_done" />
          </div>
        </section>
      </main>

      <Tabs>
        <Tab label="Actividad" className="selected"/>
        <Tab label="" />
      </Tabs>

      <main style={{ borderTop: '1px dotted #CCC', paddingTop: '2rem'}}>
        <aside>
          <span><span className="grey">&nbsp; 10/10/2016 &nbsp;</span><Icon className="small red step" icon="subdirectory_arrow_left" /></span>
          <div style={{ border: 'dashed 2px #CCC', width: '2px', flex: '1', marginRight: '1.3rem'}} />
        </aside>
        <section>
          <span>
            <Icon className="thumb tiny" icon="person" />
            <span className="subtitle">&nbsp;&nbsp;Paco Mercado</span><span> ha asignado el Trabajo </span><span className="subtitle">a Daniel García <Icon className="thumb tiny" icon="person" /></span>
          </span>
        </section>
      </main>

      <main>
        <aside>
          <span><span className="grey">&nbsp; 10/10/2016 &nbsp;</span><Icon className="small blue step" icon="done" /></span>
          <div style={{ border: 'dashed 2px #CCC', width: '2px', flex: '1', marginRight: '1.3rem'}} />
        </aside>
        <section>
          <span>
            <Icon className="thumb small" icon="person" />
            <span className="subtitle">&nbsp;&nbsp;Daniel Garcia</span><span> ha terminado el Trabajo </span>
          </span>
        </section>
      </main>

      <main>
        <aside>
          <span><span className="grey">&nbsp; 10/10/2016 &nbsp;</span><Icon className="small green step" icon="done_all" /></span>
        </aside>
        <section>
          <span>
            <Icon className="thumb small" icon="person" />
            <span className="subtitle">&nbsp;&nbsp;Paco Mercado</span><span> ha validado el Trabajo </span>
          </span>
        </section>
      </main>

    </div>
  )
}

export { JobItem, JobCard }
