import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";

import api from "../api";
import Axios from "axios";
import Hero from "../components/Hero";
import NewBadgeButton from "./NewBadgeButton";
import { Form } from "react-bootstrap";
import { faThList } from "@fortawesome/free-solid-svg-icons";

class Badgests extends React.Component {
  state = {
    dataCustom: [],
    dataRnM: [],
    dataEmpty: false,
    loading: true,
    error: null,
    badgeSwitch: false,
    pageApiRnM: 1,
    switchCount: 0,
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
    console.log("pedida datos RN", this.state.switchCount);
    if (this.state.switchCount > 1) {
      return this.setState({ loading: false });
    }
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
      });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  onSwitchAction = async () => {
    if (this.state.badgeSwitch === false) {
      await this.setState({
        loading: true,
        switchCount: this.state.switchCount + 1,
      });
      await this.fetchDataRnM();
    }
    this.setState({ badgeSwitch: !this.state.badgeSwitch });
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
              <NewBadgeButton buttonLabel="New Badge" />
            ) : null}
          </div>
        </div>
        <div className="container width: 25%">
          <BadgesList
            dataEmpty={this.state.dataEmpty}
            dataBadgeCustom={this.state.dataCustom}
            inLogin={this.state.loading}
            dataRnM={this.state.dataRnM}
            switchState={this.state.badgeSwitch}
          />
        </div>
        <div className="row justify-content-center">
          {this.state.badgeSwitch ? (
            <button
              type="button"
              className="btn btn-dark col-8"
              onClick={() => this.fetchDataRnM()}
            >
              More Badges
            </button>
          ) : null}
        </div>
      </>
    );
  }
}

export default Badgests;
