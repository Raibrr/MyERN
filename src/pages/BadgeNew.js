// React
import React from "react";

// Components
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";

// Stayles
import "./styles/BadgeNew.css";
import badge_header from "../images/badge-header.svg";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <div>
          <div className="BadgeNew__hero">
            <img className="img-fluid" src={badge_header} alt="Badge_header" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
