import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default function withFetch(Component) {
  return class WithFetchComponent extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}
