import React from "react";
import Axios from 'axios';

// Components
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";
import Hero from "../components/Hero.js";
import List from "../components/List.js";

// Stayles
import "./styles/BadgeNew.css";


class BadgeView extends React.Component {
  /*
    ++++++
    Props come from App component
    +++++
  */
  state = {
    putLoading: false,
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


  componentDidMount() {
    if (this.props.inEditing === true && this.state.putLoading === false) {
      console.log("ejecucion");
      this.fetchData();
    }
  }

  fetchData = async (e) => {
    console.log(this.props.inEditing);
    this.setState({ putLoading: true });
    try {
      const response = await Axios.get(`http://localhost:3020/api/badges/${this.props.match.params.badgeId}`);
      const data = response.data;
      console.log(data);

      //Mejorar sintaxis
      this.setState({ 
        putLoading: false, 
        form: { 
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          jobTitle: data.jobTitle,
          twitter: data.twitter,
        } 
      });
    } catch (error) {
      throw error;
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handlePostSubmit = async (e) => {
    e.preventDefault();
    this.setState({ postLoading: true });
    try {
      const data = this.state.form;
      const URL = `http://localhost:3020/api/badges/new/badge`;
      await Axios.post(URL, data)
      this.setState({ postLoading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ postLoading: false, postError: error });
    }
  };

  handlePutSubmit = async (e) => {
    e.preventDefault();
    this.setState({ putLoading: true });
    try {
      const data = this.state.form;
      const response = await Axios.put(`http://localhost:3020/api/badges/${this.props.match.params.badgeId}/update-badge`, data);
      console.log(response);
      /* await api.badges.update(this.props.match.params.badgeId, data); */
      this.setState({ putLoading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ putLoading: false, postError: error });
    }
  };

  render() {
    if (this.state.postLoading === true || this.state.putLoading === true) {
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
                loadingEdit={this.state.putLoading}
              />
            </div>
            <div className="col-6">
              <h1>{this.props.formTitle}</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={
                  this.props.inEditing
                    ? this.handlePutSubmit
                    : this.handlePostSubmit
                }
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeView;
