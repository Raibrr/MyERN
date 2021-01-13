import React from "react";
import md5 from "md5";

class Gravatar extends React.Component {
  render() {
    const hash = md5(this.props.email);
    return (
      <img
        className={this.props.className}
        src={`https://gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar"
      />
    );
  }
}
export default Gravatar;
