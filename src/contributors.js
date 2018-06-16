import React from 'react';
import ContributorBox from './contributor'

const contributors = [
  {
    name:"Belhassen",
    description:"Your Descriptions",
    facebook:"",
    github:"",
    linkedin:"",
    avatar:require("./avatars/default.png")
  },
  {
    name:"Ameur",
    description:"Your Descriptions",
    facebook:"",
    github:"",
    linkedin:"",
    avatar:require("./avatars/default.png")
  },
  {
    name:"Abdulhamid",
    description:"I am a full stack JavaScript developer currently enrolled in Addis Ababa University. And a member of MWS track in the Google Africa Scholarship challenge. ",
    facebook:"",
    github:"https://github.com/abdulhamidOumer",
    linkedin:"https://www.linkedin.com/in/abdulhamid-mohammed-3a9485108/",
    avatar:require("./avatars/Abdulhamid.png")
  }
]

const Contributors = () => {

  return contributors.map(contributor =>{
    return(
      <ContributorBox contributor={contributor}/>
    );
  })


}
export default Contributors;
