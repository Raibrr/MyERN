import React, { useEffect, useState, useMemo } from "react";

import { Link, NavLink } from "react-router-dom";
import List from "../components/List";

const BadgesList = ({
  switchState,
  dataEmpty,
  dataBadgeCustom,
  dataRnM,
  query,
  inLoading,
}) => {
  console.log(inLoading);
  const [renderData, setRenderData] = useState([]);
  const [filteredBadges, setFilteredBadges] = useState([]);
  let badgeName;
  let ocupation;
  let email;
  let twitter;
  let image;

  useEffect(() => {
    console.log("efecto switchState");
    if (switchState === true) {
      return setRenderData(dataRnM);
    }
    setRenderData(dataBadgeCustom);
  }, [switchState, dataBadgeCustom, dataRnM]);

  useMemo(() => {
    const response = renderData.filter((badge) => {
      if (badge.firstName) {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      }
      return `${badge.name}`.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredBadges(response);
  }, [renderData, query]);

  const validatRenderData = (item) => {
    //El nombre de los item.* hacen referencia a como vine el objeto que se recupera de la API
    if ("firstName" in item) {
      return (
        (badgeName = `${item.firstName} ${item.lastName}`),
        (ocupation = `${item.jobTitle}`),
        //Email se usa porque el Gravatar (es decir la imagen) se gener apartir del mismo.
        (email = item.email),
        //
        (twitter = item.twitter),
        (image = null)
      );
    }
    return (
      (badgeName = `${item.name}`),
      (ocupation = `${item.species}`),
      (image = item.image),
      (email = null),
      (twitter = "No twitter were found")
    );
  };

  if (dataEmpty === true) {
    return (
      <div>
        <h1>No Badge were founde</h1>
        <Link to="badge/new" className="btn btn-primary">
          Crate new Badge
        </Link>
      </div>
    );
  }
  if (inLoading === true) {
    return (
      <div>
        <ul className="list-unstyled">
          <li>
            <List />
          </li>
        </ul>
      </div>
    );
  }

  if (filteredBadges.length === 0 && renderData.length > 0) {
    return (
      <div>
        <h1>No Badge were founde</h1>
        {switchState === false && (
          <Link to="badge/new" className="btn btn-primary">
            Crate new Badge
          </Link>
        )}
      </div>
    );
  }
  return (
    <div>
      <ul className="list-unstyled">
        <li>
          {filteredBadges.map((item, index) => {
            validatRenderData(item);
            if ("firstName" in item) {
              return (
                <NavLink
                  to={`badge/${item.id}`}
                  id={index}
                  className="text-reset text-decoration-none"
                >
                  <List
                    key={index}
                    badgeName={badgeName}
                    ocupation={ocupation}
                    email={email}
                    twitter={twitter}
                    image={image}
                  />
                </NavLink>
              );
            }
            return (
              <List
                key={index}
                badgeName={badgeName}
                ocupation={ocupation}
                email={email}
                twitter={twitter}
                image={image}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default BadgesList;
