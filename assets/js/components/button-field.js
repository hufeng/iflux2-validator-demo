var React = require('react');


/**
 * ButtonField
 */
var ButtonField = React.createClass({
  render() {
    return (
      <tr>
        <td colSpan="2">
          {this.props.children}
        </td>
      </tr>
    );
  }
});


module.exports = ButtonField;
