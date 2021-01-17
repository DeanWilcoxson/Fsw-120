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
    let styles = {
      width: "400px",
      border: "3px solid black",
      borderRadius: "5px",
      textAlign: "center",
    };
    return (
      <div>
        <div style={styles}>
          <form>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
            <input
              // type="number"
              placeholder="Phone"
              name="phone"
              pattern="[0-9]{10}"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              placeholder="Place of Birth"
              name="placeOfBirth"
              value={this.state.placeOfBirth}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              placeholder="Favorite Food"
              name="favFood"
              value={this.state.favFood}
              onChange={this.handleChange}
              required
            />
            <textarea
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
        <ol>
          {this.state.badges.map(function (badge, index) {
            let stylesTwo = {
              width: "400px",
              border: "3px solid black",
              borderRadius: "5px",
            };
            console.dir(index);
            return (
              <div style={stylesTwo} key={index}>
                <h1 style={{ backgroundColor: "gray", color: "white" }}>
                  Badge
                </h1>
                <p>Name: {`${badge.firstName} ${badge.lastName}`}</p>
                <p>
                  Phone Number:{" "}
                  {`${badge.phone
                    .toString()
                    .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`}
                </p>
                <br />
                <p>Place of Birth: {`${badge.placeOfBirth}`}</p>
                <p>Email: {`${badge.email}`}</p>
                <br />
                <p>Favorite Food: {`${badge.favFood}`}</p>
                <br />
                <p>{`${badge.description}`}</p>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
}
export default Form;
