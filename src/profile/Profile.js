import React from "react";
import PropTypes from 'prop-types'; // ES6



const Profile = ({fullname,bio,proffession,handleName})=> {
    
    return (
        <div>
             {fullname}
               {bio}
                 {proffession} 
             <button   onClick={()=>handleName(fullname,bio,proffession)}>click</button>
        </div>
    )
}
Profile.propTypes = {
    fullname : PropTypes.string,
    bio : PropTypes.string,
    proffession : PropTypes.string,
    handleName : PropTypes.func,
}

Profile.defaultProps = {
    fullname:"default",
    bio : "default",
    proffession : "default",
    handleName : "default",
  }

export default Profile
