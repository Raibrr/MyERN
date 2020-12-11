import React from "react";

class BadgeNew extends React.Component {
  state = {};
  /* handleChange = (e) => {
    //console.log({ value: e.target.value });

    this.setState({
      [e.target.name]: e.target.value,
    });
  }; */

  handleClick = (e) => {
    console.log("handleClick");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>New Attendant</h1>

        <div className="form-grup">
          <form onSubmit={this.handleSubmit}>
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={this.props.onChange}
              //value solo sirve para NO guardar los valores en 2 lugare a la vez, lo mencionan en el curso de React de
              //Platzi
              value={this.state.firstName}
            />

            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={this.props.onChange}
              value={this.state.lastName}
            />

            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.props.onChange}
              value={this.state.Email}
            />

            <label>JobTitle</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.state.JobTitle}
            />

            <label>Twitter</label>
            <input
              type="text"
              className="form-control"
              name="twitter"
              onChange={this.props.onChange}
              value={this.state.Twitter}
            />
            <div>
              <button
                className="btn btn-primary"
                //type="button"
                onClick={this.handleClick}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
