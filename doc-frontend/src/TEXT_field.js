import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class TEXT_field extends React.Component {
  constructor() {
    super();
    this.state = {
      "stuffInTextField": "",
    }
  }

  onstuffInTextFieldChange = (event) => {
    console.log(this.state.stuffInTextField);
    this.setState({"stuffInTextField": event.target.value});

  }

  render() {
    return (
      <MuiThemeProvider>
        <TextField
          id="text-field-email"
          value={this.state.stuffInTextField}
          onChange={this.onstuffInTextFieldChange}/>
      </MuiThemeProvider>
    );
  }
}

export default TEXT_field;
