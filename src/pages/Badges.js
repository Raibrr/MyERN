import React from "react";
//Components
import BadgesList from "../components/BadgesList";
import Button from "../components/Button";
import Hero from "../components/Hero";

//react-bootstrap
import { Form, Spinner } from "react-bootstrap";
//services
import api from "../api";
//libraries
import Axios from "axios";

class Badgests extends React.Component {
  state = {
    dataCustom: [],
    dataRnM: [],
    dataEmpty: false,
    loading: true,
    error: null,
    badgeSwitch: false,
    pageApiRnM: 1,
    requestBySwitch: false,
    firstSwitchRequest: false,
    moreBadgesLoading: false,
  };
  async componentDidMount() {
    console.log("DidMount de badges");
    await this.fetchdataBadges();
    console.log(this.state.dataCustom, this.state.loading);
    if (this.state.dataCustom.length === 0) {
      this.setState({ dataEmpty: true });
    }
  }

  fetchdataBadges = async () => {
    try {
      const data = await api.badges.list();
      console.log(data);
      this.setState({ dataCustom: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  fetchDataRnM = async () => {
    /* ///
      If necesario para que el switch no llame mas datos cada que esta true
    */ ////
    if (
      this.state.firstSwitchRequest === true &&
      this.state.requestBySwitch === true
    ) {
      console.log("entro al return");
      return this.setState({ loading: false, requestBySwitch: false });
    }
    //
    //
    try {
      const response = await Axios.get(
        `https://rickandmortyapi.com/api/character?page=${this.state.pageApiRnM}`
      );
      const {
        data: { results: reply },
      } = response;
      this.setState({
        loading: false,
        dataRnM: [].concat(this.state.dataRnM, reply),
        pageApiRnM: this.state.pageApiRnM + 1,
        requestBySwitch: false,
      });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  onSwitchAction = async () => {
    if (this.state.badgeSwitch === false) {
      await this.setState({
        loading: true,
        requestBySwitch: true,
      });
      await this.fetchDataRnM();
    }
    if (this.state.firstSwitchRequest === false) {
      this.setState({ firstSwitchRequest: true });
    }
    this.setState({ badgeSwitch: !this.state.badgeSwitch });
  };

  moreBadgesRnM = async () => {
    this.setState({ moreBadgesLoading: true });
    await this.fetchDataRnM();
    this.setState({ moreBadgesLoading: false });
  };

  render() {
    if (this.state.error) {
      return `Error ${this.state.error.message}`;
    }

    return (
      <>
        <Hero />

        <div className="row justify-content-center">
          <div className="col-sm-5 col-5">
            <Form.Check
              custom
              type="switch"
              id="custom-switch"
              checked={this.state.badgeSwitch}
              onChange={this.onSwitchAction}
            />
            <p className="Badge__switch">Badges Rick n Morty?</p>
          </div>
          <div className="col-sm-2 col-5">
            {this.state.dataCustom.length > 0 ? (
              <Button
                text="New Badge"
                className="btn btn-primary"
                redirect={`new`}
              />
            ) : null}
          </div>
        </div>
        <div className="container width: 25%">
          <BadgesList
            dataEmpty={this.state.dataEmpty}
            dataBadgeCustom={this.state.dataCustom}
            dataRnM={this.state.dataRnM}
            inLogin={this.state.loading}
            switchState={this.state.badgeSwitch}
          />
        </div>
        <div>
          {this.state.badgeSwitch && (
            <div className="row justify-content-center">
              {this.state.moreBadgesLoading ? (
                <Spinner animation="grow" variant="dark" />
              ) : (
                <button
                  type="button"
                  className="btn btn-dark col-8"
                  onClick={() => this.moreBadgesRnM()}
                >
                  More Badges
                </button>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Badgests;
