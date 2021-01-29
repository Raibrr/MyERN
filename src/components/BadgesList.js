import React from "react";

import { Link } from "react-router-dom";
import List from "../components/List";

class BadgesList extends React.Component {
  state = {
    renderData: [],
  };

  componentDidUpdate(prevProps) {
    console.log("did update de list");
    if (this.props.switchState !== prevProps.switchState) {
      this.props.switchState === true
        ? this.setState({ renderData: this.props.dataRnM })
        : this.setState({ renderData: this.props.dataBadgeCustom });
    }

    if (this.props.dataRnM !== prevProps.dataRnM) {
      this.setState({ renderData: this.props.dataRnM });
    }

    if (this.props.dataBadgeCustom !== prevProps.dataBadgeCustom) {
      this.setState({ renderData: this.props.dataBadgeCustom });
    }
  }

  validatRenderData = (item) => {
    //El nombre de los item.* hacen referencia a como vine el objeto que se recupera de la API
    if ("firstName" in item) {
      return (
        (this.badgeName = `${item.firstName} ${item.lastName}`),
        (this.ocupation = `${item.jobTitle}`),
        //Email se usa porque el Gravatar (es decir la imagen) se gener apartir del mismo.
        (this.email = item.email),
        //
        (this.twitter = item.twitter),
        (this.image = null)
      );
    }
    return (
      (this.RnMInformation = true),
      (this.badgeName = `${item.name}`),
      (this.ocupation = `${item.species}`),
      (this.image = item.image),
      (this.twitter = "No twitter were found")
    );
  };

  render() {
    let dataInOrder;
    if (this.props.dataEmpty === true) {
      return (
        <div>
          <h1>No Badge were founde</h1>
          <Link to="badge/new" className="btn btn-primary">
            Crate new Badge
          </Link>
        </div>
      );
    }

    if (this.state.renderData.length > 0) {
      {
        "firstName" in this.state.renderData[0]
          ? (dataInOrder = this.state.renderData.reverse())
          : (dataInOrder = this.state.renderData);
      }
      return (
        <div>
          <ul className="list-unstyled">
            <li>
              {dataInOrder.map((item, index) => {
                this.validatRenderData(item);
                if ("firstName" in item) {
                  return (
                    <Link
                      to={`badge/${item.id}`}
                      key={index}
                      className="text-reset text-decoration-none"
                    >
                      <List
                        key={index}
                        badgeName={this.badgeName}
                        ocupation={this.ocupation}
                        email={this.email}
                        twitter={this.twitter}
                        image={this.image}
                      />
                    </Link>
                  );
                }
                return (
                  <List
                    key={index}
                    badgeName={this.badgeName}
                    ocupation={this.ocupation}
                    email={this.email}
                    twitter={this.twitter}
                    image={this.image}
                  />
                );
              })}
            </li>
          </ul>
        </div>
      );
    }

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
}

export default BadgesList;
