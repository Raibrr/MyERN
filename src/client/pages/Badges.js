import React, { useState, useEffect } from "react";
import Axios from "axios";
//Components
import BadgesList from "../components/BadgesList";
import Button from "../components/Button";
import Hero from "../components/Hero";

//react-bootstrap
import { Form, Spinner } from "react-bootstrap";


const Badgests = (props) => {
  const [dataCustom, setDataCustom] = useState([]);
  const [dataRnM, setDataRnM] = useState([]);
  const [dataEmpty, setDataEmpty] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [badgeSwitch, setBadgeSwitch] = useState(false);
  const [pageApiRnM, setPageApiRnM] = useState(1);
  const [firstSwitchRequest, setFirstSwitchRequest] = useState(false);
  const [moreBadgesLoading, setMoreBadgesLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchdataBadges = async () => {
      try {
        const URL = `http://localhost:3020/api/badges`
        const response = await Axios.get(URL);
        const { data } = response;
        if (data.length === 0) {
          return setDataEmpty(true);
        }

        setDataCustom(data.reverse());
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchdataBadges();
  }, []);
  /*
  Efecto necesario para que switch solo ida dato a la API en su primera activacion
*/
  useEffect(() => {
    if (badgeSwitch === true && firstSwitchRequest === false) {
      setLoading(true);
      fetchDataRnM();
      setFirstSwitchRequest(true);
    }
  }, [badgeSwitch]);
  /*
   *********
   */
  const fetchDataRnM = async () => {
    try {
      const response = await Axios.get(
        `https://rickandmortyapi.com/api/character?page=${pageApiRnM}`
      );
      const {
        data: { results: reply },
      } = response;
      setLoading(false);
      setDataRnM([].concat(dataRnM, reply));
      setPageApiRnM(pageApiRnM + 1);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const moreBadges = async () => {
    setMoreBadgesLoading(true);
    await fetchDataRnM();
    setMoreBadgesLoading(false);
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
            onChange={() => setBadgeSwitch(!badgeSwitch)}
          />
          <p className="Badge__switch">Badges Rick n Morty?</p>
        </div>
        <div className="col-sm-2 col-5">
          {dataCustom.length > 0 && (
            <Button
              text="New Badge"
              className="btn btn-primary"
              redirect={`new`}
            />
          )}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="container width: 25%">
          <p className="Badge__label">Filter Badges</p>
          <input
            type="text"
            value={query}
            className="form-control mb-3"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="container width: 25%">
        <BadgesList
          dataEmpty={dataEmpty}
          dataBadgeCustom={dataCustom}
          dataRnM={dataRnM}
          inLoading={loading}
          switchState={badgeSwitch}
          query={query}
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
                className="btn btn-dark col-8 mt-2"
                onClick={moreBadges}
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
