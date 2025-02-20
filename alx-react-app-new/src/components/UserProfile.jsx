const UserProfile = (props) => {
  return (
    <div style={{border: "1px solid gray", padding: "10px", margin: "10px"}}>
      <h2 style={{color:"blue"}}>{props.name}</h2>
      <p style={{backgroundColor:"green", color:"white", fontSize:"20px"}}>Age: <span style={{fontWeight: "bold"}}>{props.age}</span></p>
      <p style={{backgroundColor:"green", color:"white", fontSize:"20px"}}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;