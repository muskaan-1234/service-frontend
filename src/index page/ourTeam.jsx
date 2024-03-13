import React from 'react';

const OurTeam = () => {
  const teamStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const memberStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <>
      <center>
        <p
          style={{
            width: '100%',
            background: 'grey',
            lineHeight: '250%',
            fontSize: '24px',
            fontWeight: 'bolder',
            textDecoration: 'italic',
            padding: '10px',
            color: 'white',
          }}
        >
          Developed By
        </p>
      </center>
      <br />
      <div style={teamStyle}>
        <div style={memberStyle}>
          <img
            src="https://service-backend-m9xm.onrender.com/pics/myself.jpeg" 
            alt="Developer"
            style={imageStyle}
          />
          <h4>Muskaan Chauhan</h4>
          <p>Full Stack Developer</p>
          <p>Developer of Website</p>
          <p>muskaan.in2808@gmail.com</p>
        </div>

        {/* Guide */}
        <div style={memberStyle}>
          <img
            src="https://service-backend-m9xm.onrender.com/pics/sir.jpeg" 
            alt="Guide"
            style={imageStyle}
          />
          <h4>Rajesh Bansal</h4>
          <p>Author of Book "Real Java"</p>
          <p>Guide</p>
        </div>
      </div>
      <br />
    </>
  );
};

export default OurTeam;
