import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class PanelGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  panelGroupClasses() {
    return classNames(
      'panel-group',
      this.props.className
    )
  };

  render() {
    return (
      <div className={ this.panelGroupClasses() }>
        { this.props.children }
      </div>
    );
  }
}

PanelGroup.Item = class PanelGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    panelType: PropTypes.oneOf(['name','item']),
    panelName: PropTypes.string,
    className: PropTypes.string
  };

  panelItemClasses() {
    const panelClass = this.props.panelName ? 'name' : 'item';

    return classNames(
      'panel',
      `panel-${ panelClass }`,
      this.props.className
    );
  }

  render() {
    return (
      <div className={ this.panelItemClasses() }>
        { this.props.panelName }
        { this.props.children }
      </div>
    );
  }

}

export default PanelGroup
