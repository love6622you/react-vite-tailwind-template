import React from "react";
import PropTypes from "prop-types";
import UserResults from "@/components/users/UserResults";

function Home(props) {
  const user = {
    login: true,
    avatar_url: "123"
  };
  return (
    <>
      <UserResults user={user} />
    </>
  );
}

Home.propTypes = {};

export default Home;
