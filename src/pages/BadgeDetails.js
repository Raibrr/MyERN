import React from "react";
import Hero from "../components/Hero";
import api from "../api";
import Badge from "../components/Badge";
import Button from "../components/Button";
import DeleteButton from "../components/DeleteButton";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    badgeData: null,
    error: null,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    console.log(this.props.match.params);
    if (this.props.match.params.badgeId === Number) {
      console.log("es un numero");
    }
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      console.log(data.firstName);
      this.setState({ badgeData: data, loading: false });
    } catch (error) {
      throw error;
    }
  };

  handleDeleteBadge = async () => {
    console.log(this.props.match.params.badgeId);
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ error: error });
    }
  };

  assignBadgeName = () => {
    if (this.state.badgeData) {
      return `${this.state.badgeData.firstName} ${this.state.badgeData.lastName}`;
    }
  };
  render() {
    return (
      <div>
        <Hero badgeName={this.assignBadgeName()} />

        <div className="container">
          <div className="d-flex align-items-center">
            <div className="col-6">
              {this.state.badgeData ? (
                <Badge
                  firstName={this.state.badgeData.firstName}
                  lastName={this.state.badgeData.lastName}
                  jobTitle={this.state.badgeData.jobTitle}
                  email={this.state.badgeData.email}
                  twitter={this.state.badgeData.twitter}
                  loadingEdit={this.state.loading}
                />
              ) : (
                <Badge loadingEdit={this.state.loading} />
              )}
            </div>
            <div className="col-sm-4 col-6">
              <h1 className="d-flex justify-content-center">Actions:</h1>
              <Button
                text="Edit"
                className="btn btn-primary btn-lg"
                redirect={`${this.props.match.params.badgeId}/edit`}
              />

              <br />

              <DeleteButton handleDeleteBadge={this.handleDeleteBadge} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
