import React, { useEffect, useState } from "react";
import { useAppState } from "../../AppState.js";

const Auth = (props) => {
  const type = props.match.params.form;
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const [userData, setUserData] = useState(null);
  const { state, dispatch } = useAppState();
  console.log(state);
  // state;

  useEffect(() => {
    if (userData) {
      console.log(userData);
      const { token, user } = userData;
      dispatch({ type: "auth", payload: { token, username: user.username } });
      window.localStorage.setItem(
        "auth",
        JSON.stringify({ token, username: user.username })
      );
      props.history.push("/dashboard");
    } else {
    }
  }, [userData]);

  const actions = {
    signup: () => {
      return fetch(state.url + "/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },

    login: () => {
      return fetch(state.url + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dispatch, actions[type]);
    actions[type]().then((data) => {
      setUserData(data);
    });
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <input
          className="email"
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value={type} />
      </form>
    </div>
  );
};

export default Auth;
