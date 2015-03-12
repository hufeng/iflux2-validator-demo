var React = require('react');

var Form = React.createClass({
  render() {
    var title = this.props.title;

    return (
      <fieldset>
        <legend>{title}</legend>
        <form>
          <table>
            {this.props.children}
          </table>
        </form>
      </fieldset>
    );
  }
});

module.exports = Form;
