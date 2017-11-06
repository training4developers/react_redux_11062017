import * as React from 'react';

import { ToolHeader } from './tool-header';
import { ColorList } from './color-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <ColorList {...this.props} onDeleteColor={this.props.deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={this.props.insertColor} />
      {this.props.showLoading ? <section>
        <div className="screen-block"></div>
        <div className="loading-message"> Loading... </div>
      </section> : null}
    </div>;
  }
}

