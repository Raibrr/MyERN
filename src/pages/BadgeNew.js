// React
import React from "react";

// Components
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";
import Hero from "../components/Hero.js";
import List from "../components/List.js";

// Stayles
import "./styles/BadgeNew.css";
import badge_header from "../images/badge-header.svg";

//API
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    postLoading: false,
    postError: null,
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ postLoading: true });
    try {
      const data = this.state.form;
      await api.badges.create(data);
      this.setState({ postLoading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ postLoading: false, postError: error });
    }
  };

  render() {
    if (this.state.postLoading === true) {
      return (
        <>
          <Hero />
          <div>
            <ul className="list-unstyled">
              <li>
                <List />
              </li>
            </ul>
          </div>
        </>
      );
    }
    return (
      <>
        <Hero />

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
                onSubmit={this.handleSubmit}
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
