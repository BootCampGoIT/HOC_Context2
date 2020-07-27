import React, { Component } from 'react';
import { Consumer } from '../../index';

const connect = Component => {
    return class ContextHOC extends Component {
        state = {

        }
        render() {

            return (
                <Consumer>
                    {(data) => (
                        <Component {...this.props} style={data.style} />
                    )}
                </Consumer>
            )
        }
    }
}
export default connect;