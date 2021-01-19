import React from "react";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      placeOfBirth: "",
      email: "",
      phone: "",
      favFood: "",
      description: "",
      badges: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    let userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      placeOfBirth: this.state.placeOfBirth,
      favFood: this.state.favFood,
      description: this.state.description,
    };
    userData.firstName.length >= 3 &&
    userData.lastName.length >= 3 &&
    userData.phone.toString().length >= 3 &&
    userData.phone.toString().length <= 10 &&
    userData.email.length >= 3 &&
    userData.description.length >= 3 &&
    userData.placeOfBirth.length >= 3 &&
    userData.favFood.length >= 3
      ? this.setState({
          badges: [userData, ...this.state.badges],
        })
      : console.log(userData);
  }
  handleChange(e) {
    const { name, value } = e.target;
    name === "phone" && value.length > 0
      ? this.setState({
          [name]: Number(value) ? Number(value) : this.state.phone,
        })
      : this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <div id="form">
          <form>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
            <input
              id="inputPhone"
              placeholder="Phone"
              name="phone"
              pattern="[0-9]{10}"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
            <input
              id="inputEmail"
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              id="inputPlace"
              type="text"
              placeholder="Place of Birth"
              name="placeOfBirth"
              value={this.state.placeOfBirth}
              onChange={this.handleChange}
              required
            />
            <input
              id="inputFood"
              type="text"
              placeholder="Favorite Food"
              name="favFood"
              value={this.state.favFood}
              onChange={this.handleChange}
              required
            />
            <textarea
              id="inputDesc"
              type="text"
              placeholder="Tell us about yourself"
              cols="40"
              rows="5"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
            <br />
            <button onClick={this.handleClick}>Submit</button>
          </form>
        </div>
        <div>
          {this.state.badges.map(function (badge, index) {
            
            return (
              <div id="badge" key={index}>
                <h1 id="header" style={{ backgroundColor: "gray", color: "white" }}>
                  Badge
                </h1>
                <p id="name">Name: {`${badge.firstName} ${badge.lastName}`}</p>
                <p id="phone">
                  Phone Number:
                  {`${badge.phone
                    .toString()
                    .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`}
                </p>

                <p id="place" >Place of Birth: {`${badge.placeOfBirth}`}</p>
                <p id="email">Email: {`${badge.email}`}</p>

                <p id="food">Favorite Food: {`${badge.favFood}`}</p>

                <p id="desc">{`${badge.description}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Form;