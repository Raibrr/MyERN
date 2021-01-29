import React from "react";

class BadgeNew extends React.Component {
  render() {
    return (
      <>
        <div className="form-grup">
          <form>
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={this.props.onChange}
              //value solo sirve para NO guardar los valores en 2 lugare a la vez, lo mencionan en el curso de React de
              //Platzi
              defaultValue={this.props.formValues.firstName}
            />

            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={this.props.onChange}
              defaultValue={this.props.formValues.lastName}
            />

            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.props.onChange}
              defaultValue={this.props.formValues.email}
            />

            <label>JobTitle</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              onChange={this.props.onChange}
              defaultValue={this.props.formValues.jobTitle}
            />

            <label>Twitter</label>
            <input
              type="text"
              className="form-control"
              name="twitter"
              onChange={this.props.onChange}
              defaultValue={this.props.formValues.twitter}
            />
            <div>
              <button
                className="btn btn-primary"
                //type="button"
                onClick={this.props.onSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default BadgeNew;
