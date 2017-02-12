import React, { Component, PropTypes } from 'react';

const Signin = function (props) {
  return (
    <div>
      <input type="text" />
      <button onClick={e => props.setStorageSync(e.target.value)}>submit</button>
    </div>
  );
};

Signin.propTypes = {

};

export default Signin;
