var React = require('react');

/**
 * default color
 */
var style = {
  color: 'red'
};


/**
 * formfield
 */
var FormField = React.createClass({
  render() {
    var error = this.props.error;
    var label = this.props.label;
    var required = this.props.required;

    return (
	     <tr>
        <td>
          <label>{required ? <span style={style}>*</span> : null}{this.props.label}</label>
        </td>
	      <td>
          {this.props.children}
          {error ? <span style={style}>{error}</span> : null}
        </td>
	     </tr>
    );
  }
});

module.exports = FormField;
