import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


class BadgesList extends React.Component {
  render() {
    console.log(this.props.dataBadge);
    return (
      <div>
        <ul className="list-unstyled">
          {this.props.dataBadge.map((item) => {
            return (
              <li>
                <div className="card mb-3">
                  <div className="row">
                    <div className="col align-self-center col-4 ">
                      <img
                        className="rounded-circle col aligin-self-center w-auto h-auto"
                        src={item.avatarUrl}
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h4 className="fw-bolder">
                          {`${item.firstName} ${item.lastName}`}{" "}
                        </h4>
                        <p className="card-text">
                        <FontAwesomeIcon icon={faTwitter} className='text-info'/>
                        <a
                            href="/"
                            target="_blank"
                            className="text-info text-decoration-none"
                          >{`@${item.twitter}`}</a>
                        </p>
                        <p className="card-text">{`${item.jobTitle}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
