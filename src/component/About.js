import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

const About = () => {
  const cardInfo = [
    {
      image: "https://avatars.githubusercontent.com/u/108029468?v=4",
      title: "Saeed Kokash",
      text: "TL",
    },
    {
      image: "https://avatars.githubusercontent.com/u/65464415?v=4",
      title: "Omar Qattam",
      text: "Member",
    },
    {
      image: "https://avatars.githubusercontent.com/u/108058306?v=4",
      title: "Ali Mohammad",
      text: "Member",
    },
    {
      image: "https://avatars.githubusercontent.com/u/108042591?v=4",
      title: "Bashar Al-Zrigat",
      text: "Member",
    },
    {
      image: "https://avatars.githubusercontent.com/u/94776105?v=4",
      title: "Firas Yacoup",
      text: "Member",
    },
    {
      image: "https://avatars.githubusercontent.com/u/108057115?v=4",
      title: "Bayan Al-Jawawdeh",
      text: "Member",
    },
    {
      image: "https://avatars.githubusercontent.com/u/97349122?v=4",
      title: "Shaima Al-Khateeb",
      text: "Member",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <>
        <Card style={{ width: "18rem"}} key={index} className="box">
          <Card.Img variant="top" src={card.image} style={{ borderRadius: "50%", padding: "5%"}}/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <div className="login-body">
      <h1 className='contactTxt' >Meet our Developers</h1>
      <div className="grid">{cardInfo.map(renderCard)}</div>
    </div>
  );
};

export default About;