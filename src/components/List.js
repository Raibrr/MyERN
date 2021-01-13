import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Skeleton from "react-loading-skeleton";
import Gravatar from "./Gravatar";

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
                email={this.props.email}
              />
            )}
          </div>
          <div className="col-8">
            <div className="card-body">
              <h4 className="fw-bolder">
                {this.props.badgeName || <Skeleton />}{" "}
              </h4>
              <p className="card-text">
                <FontAwesomeIcon icon={faTwitter} className="text-info" />
                <a
                  href="/"
                  target="_blank"
                  className="text-info text-decoration-none"
                >
                  @{this.props.twitter || <Skeleton width={100} />}
                </a>
              </p>
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
