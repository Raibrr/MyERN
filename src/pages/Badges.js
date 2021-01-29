import React, { useState, useEffect } from "react";
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

const Badgests = (props) => {
  const [dataCustom, setDataCustom] = useState([]);
  const [dataRnM, setDataRnM] = useState([]);
  const [dataEmpty, setDataEmpty] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [badgeSwitch, setBadgeSwitch] = useState(false);
  const [pageApiRnM, setPageApiRnM] = useState(1);
  const [requestBySwitch, setRequestBySwitch] = useState(false);
  const [firstSwitchRequest, setFirstSwitchRequest] = useState(false);
  const [moreBadgesLoading, setMoreBadgesLoading] = useState(false);

  useEffect(async () => {
    await this.fetchdataBadges();
    if (dataCustom.length === 0) {
      this.setState({ dataEmpty: true });
    }
  }, []);

  const fetchdataBadges = async () => {
    try {
      const data = await api.badges.list();
      console.log(data);

      setDataCustom(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const fetchDataRnM = async () => {
    /* ///
      If necesario para que el switch no llame mas datos cada que esta true
    */ ////
    if (firstSwitchRequest === true && requestBySwitch === true) {
      console.log("entro al return");
      return setLoading(false), setRequestBySwitch(false);
    }
    //
    //
    try {
      const response = await Axios.get(
        `https://rickandmortyapi.com/api/character?page=${pageApiRnM}`
      );
      const {
        data: { results: reply },
      } = response;
      setLoading(false),
        setDataRnM([].concat(dataRnM, reply)),
        setPageApiRnM(pageApiRnM + 1),
        setRequestBySwitch(false);
      /* this.setState({
        loading: false,
        dataRnM: ,
        pageApiRnM: pageApiRnM + 1,
        requestBySwitch: false,
      }); */
    } catch (error) {
      setError(error), setLoading(false);
      /* this.setState({ loading: false, error }); */
    }
  };

  const onSwitchAction = async () => {
    if (badgeSwitch === false) {
      await setLoading(true), await setRequestBySwitch(true);
      /* await this.setState({
        loading: true,
        requestBySwitch: true,
      }); */
      await fetchDataRnM();
    }
    if (firstSwitchRequest === false) {
      setFirstSwitchRequest(true);
      /* this.setState({ firstSwitchRequest: true }); */
    }
    setBadgeSwitch(!badgeSwitch);
    /* this.setState({ badgeSwitch: !this.state.badgeSwitch }); */
  };

  const moreBadgesRnM = async () => {
    setMoreBadgesLoading(true);
    /* this.setState({ moreBadgesLoading: true }); */
    await this.fetchDataRnM();
    setMoreBadgesLoading(false);
    /* this.setState({ moreBadgesLoading: false }); */
  };

  if (error) {
    return `Error ${error.message}`;
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
            checked={badgeSwitch}
            onChange={onSwitchAction}
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
          dataEmpty={dataEmpty}
          dataBadgeCustom={dataCustom}
          dataRnM={dataRnM}
          inLogin={loading}
          switchState={badgeSwitch}
        />
      </div>
      <div>
        {badgeSwitch && (
          <div className="row justify-content-center">
            {moreBadgesLoading ? (
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
};

export default Badgests;
