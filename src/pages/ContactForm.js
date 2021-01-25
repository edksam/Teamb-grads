/* eslint-disable no-undef */
import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      graduate_name: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, graduate_name, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "/*YOUR NAME OR COMPANY*/",
      graduate_name,
      message_html: message,
    };
    emailjs.send(
      "service_eru7t5q",
      "template_3qekpor",
      templateParams,
      "user_F3i7nhSMnCilOFLVKVb9o",
    );
    this.resetForm();
    // return <Redirect to="/" />;
    const { history } = this.props;
    history.push("/");
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      graduate_name: "",
      message: "",
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, graduate_name, message } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ padding: "40px" }}>
          <label>Name</label>

          <input
            name="name"
            type="text"
            placeholder="Your first and last name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Email for contact</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <label>Graduate Name</label>

          <input
            name="graduate_name"
            type="text"
            placeholder="Name of Graduate"
            value={graduate_name}
            onChange={this.handleChange}
          />

          <label>Message</label>

          <textarea
            name="message"
            placeholder="Tell me more about..."
            value={message}
            onChange={this.handleChange}
          />

          <button color="dark">Send</button>

          <button text>Cancel</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
