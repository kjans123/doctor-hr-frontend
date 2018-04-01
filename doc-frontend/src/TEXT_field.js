import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

var styles = {
  "buttonStyle": {
    "width": "300px"
  },

  "textFieldStyle": {
    "width": "300px"
  },

  "absolute": {
    "top": "30%",
    "left": "50%",
    "position": "absolute",
    "marginLeft": "-150px",
  },

  "relative": {
    "position": "relative"
  }
}

class TEXT_field extends React.Component {
  constructor() {
    super();
    this.state = {
      "stuffInTextField": "",
      "patientData": ["nothing"]
   }
  }

  onstuffInTextFieldChange = (event) => {
    //console.log(this.state.stuffInTextField);
    this.setState({"stuffInTextField": event.target.value});
}

  getData = () => {
    var url_string = "http://vcm-3594.vm.duke.edu:5000/api/heart_rate/"
    var get_str = this.state.stuffInTextField
    var full_str = url_string.concat(get_str)
    axios.get(full_str).then( (response) => {
      //console.log(response);
      //console.log(response.status);
      const hrData = [];
      for (let i=0; i < response.data.all_heart_rates.length; i++) {
        hrData.push({
          "hr": response.data.all_heart_rates[i]
        });
      }
      console.log(hrData);
      this.setState({"patientData": hrData});
      console.log(this.state.patientData);
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style ={styles.absolute}>
          <div style={styles.relative}>
            <TextField
              style={styles.textFieldStyle}
              id="text-field-email"
              value={this.state.stuffInTextField}
              onChange={this.onstuffInTextFieldChange}/></div>
          <RaisedButton
            id = "get-button"
            style={styles.buttonStyle}
            label="Get Patient Data"
            primary={true}
            onClick = {this.getData}/>
            <div style={styles.relative}>
              <Table selectable={false}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>"Date"</TableHeaderColumn>
                    <TableHeaderColumn>"Heart Rate"</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    this.state.patientData.map((date, index) => (
                      <TableRow>{this.state.patientData.date}</TableRow>
                    ))
                  }
                </TableBody>

              </Table></div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default TEXT_field;
