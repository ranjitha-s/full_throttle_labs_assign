import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormattingSelectedDate from "./formattingSelectedDate";

class ActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      date: new Date(),
    };
    this.toggle = this.toggle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          {this.props.name}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>User Activity</ModalHeader>
          <ModalBody>
            <div>
              <label>Please select the date to view the user's activity.</label>
              <br />
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
            <br />
            <FormattingSelectedDate
              active_periods={this.props.active_periods}
              date={this.state.date}
            />
            <br />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ActivityModal;
