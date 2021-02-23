import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Skeleton from "react-loading-skeleton";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class List extends React.Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="row">
          <div className="col align-self-center col-4 ">
            {this.props.email === undefined ? (
              <Skeleton circle={true} height={80} width={80} />
            ) : (
              <Gravatar
                className="rounded-circle col aligin-self-center w-auto h-auto"
                //Uso EMAIL porque el gravatar se genera atraves del email//
                email={this.props.email}
                imageFromRnM={this.props.image}
              />
            )}
          </div>
          <div className="col-8">
            <div className="card-body">
              <h4 className="fw-bolder">
                {this.props.badgeName || <Skeleton />}{" "}
              </h4>

              <Link to="/" className="card-text text-info text-decoration-none">
                <FontAwesomeIcon icon={faTwitter} className="text-info" />@
                {this.props.twitter || <Skeleton width={100} />}
              </Link>

              <p className="card-text">
                {this.props.ocupation || <Skeleton />}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
