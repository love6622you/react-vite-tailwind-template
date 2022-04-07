import { useEffect } from "react";
import PropTypes from "prop-types";
import request from "../../lib/request";

function UserResults(props) {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // const respnose = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    // console.log(respnose);
    request({
      url: "users",
      method: "GET"
    }).then((val) => {
      console.log(val);
    });
  };

  return <div>UserResults</div>;
}

UserResults.propTypes = {};

export default UserResults;
