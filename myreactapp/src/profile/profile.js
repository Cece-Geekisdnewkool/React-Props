import React from "react";
import PropTypes from "prop-types";

const Profile = ({
  fullName,
  title,
  bio,
  profession,
  handleName,
  children,
}) => {
  Profile.defaultProps = {
    title: "My Profile",
    fullName: "Egbuna Celia",
    bio: "I am a Civil Engineer turned Software Engineer Maestro",
    profession: "Software Engineer, Buisness Woman",
    children: `<img src='./props-image.png' alt='checkpoint'/>`,
  };
  return (
    <div>
      \ title: {title}, fullName: {fullName}, bio: {bio}, profession:{" "}
      {profession}, children: {children}
    </div>
  );
};

Profile.propTypes = {
  title: PropTypes.string,
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
