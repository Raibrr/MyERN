import React from "react";
import md5 from "md5";

class Gravatar extends React.Component {
  render() {
    if (this.props.email) {
      this.hash = md5(this.props.email);
    }
    return (
      <img
        className={this.props.className}
        src={
          this.props.imageFromRnM ||
          `https://gravatar.com/avatar/${this.hash}?d=identicon`
        }
        alt="Avatar"
      />
    );
  }
}
export default Gravatar;
