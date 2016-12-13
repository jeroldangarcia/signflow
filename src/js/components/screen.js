import React from 'react';

// css
import './screen.scss';

/**
 * Screen component
 */
const Screen = (props) => {

  const renderEmpty = () => {
    return (
      <div className={`screen fullscreen`}>
        {props.children}
      </div>
    )
  }

  const renderDialog = (props) => {
    return props.dialog ? <div className="overlay">{props.dialog}</div> : '';
  }

  const renderLayout = () => {
    return (
      <div className="screen">
        <aside>
          {props.drawer}
        </aside>
        <main>
          {props.appBar}
          <article className={props.className}>
            {props.children}
          </article>
        </main>
        {renderDialog(props)}
      </div>
    )
  }

  return props.fullscreen ? renderEmpty() : renderLayout(props);
}

export default Screen;
