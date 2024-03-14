import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const OurServices = () => {
  const cardStyle = {
    width: '18rem',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const services = [
    {
      title: 'Plumbing Services',
      image:'https://thearchitectsdiary.com/wp-content/uploads/2022/02/Guest-Article-1-scaled.jpg',
      description: 'Professional plumbers offering reliable plumbing solutions for your home or business.',
    },
    {
      title: 'Electrician Services',
      image: 'https://theconsumersfeedback.com/wp-content/uploads/2022/03/Electrical.jpg',
      description: 'Skilled electricians providing comprehensive electrical repair and installation services.',
    },
    {
      title: 'Carpentry Services',
      image:'https://media.istockphoto.com/id/858298592/photo/carpenter-at-work.jpg?s=612x612&w=0&k=20&c=OaKGgvWWQvkntMx7Ue1b7dFw_CM9vPRu_lNn4j2abnY=',
      description: 'Experienced carpenters delivering high-quality carpentry services for various projects.',
    },
    {
      title: 'Painting Services',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQg8X57kxEovJfkgyke-l3QuQ-f_y-fTwBA&usqp=CAU',
      description: 'Professional painters enhancing the aesthetics of your space with top-notch painting services.',
    },
  ];

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunks = chunkArray(services, 4);

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
          Our Services
        </p>
      </center>
      <br />
      <Carousel>
        {chunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="container">
              <div className="row justify-content-center">
                {chunk.map((service, serviceIndex) => (
                  <div className="col-md-3" key={serviceIndex}>
                    <div className="card" style={cardStyle}>
                      <img src={service.image} className="card-img-top" alt={service.title} />
                      <div className="card-body">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default OurServices;
