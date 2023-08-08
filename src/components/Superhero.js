import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengersendgameImage from "../assets/images/superhero/avengersendgame.jpg";
import blackwidowImage from "../assets/images/superhero/blackwidow.jpg";
import captainmarvelImage from "../assets/images/superhero/captainmarvel.jpg";
import shazamImage from "../assets/images/superhero/shazam.jpg";
import spidermanImage from "../assets/images/superhero/spiderman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Antman Movies className=images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANTMAN</Card.Title>
                  <Card.Text className="text-left">
                    "Ant-Man" is a superhero film produced by Marvel Studios and
                    distributed by Walt Disney Studios Motion Pictures. Released
                    in 2015, it is the twelfth film in the Marvel Cinematic
                    Universe (MCU). "Ant-Man" is directed by Peyton Reed, with a
                    screenplay written by Edgar Wright, Joe Cornish, Adam McKay,
                    and Paul Rudd.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={avengersendgameImage}
                alt="Avengers End Game Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">
                    AVENGERS : END GAME
                  </Card.Title>
                  <Card.Text className="text-left">
                    "Avengers: Endgame" is an epic superhero film released in
                    2019, produced by Marvel Studios and directed by Anthony and
                    Joe Russo. It is the fourth Avengers film and the 22nd
                    installment in the Marvel Cinematic Universe (MCU). The
                    movie serves as a direct sequel to "Avengers: Infinity War."
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={blackwidowImage}
                alt="Black Widow Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BLACK WIDOW</Card.Title>
                  <Card.Text className="text-left">
                    "Black Widow" is an action-packed superhero film that falls
                    under the Marvel Cinematic Universe (MCU). The movie centers
                    around Natasha Romanoff, also known as Black Widow, who is
                    portrayed by Scarlett Johansson. The film serves as a
                    prequel to the events of "Avengers: Infinity War" and
                    "Avengers: Endgame."
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={captainmarvelImage}
                alt="Captain Marvel Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    CAPTAIN MARVEL
                  </Card.Title>
                  <Card.Text className="text-left">
                    "Captain Marvel" is a superhero film released in 2019, based
                    on the Marvel Comics character of the same name. The movie
                    was directed by Anna Boden and Ryan Fleck and is part of the
                    Marvel Cinematic Universe (MCU). The film stars Brie Larson
                    as Carol Danvers, a former U.S. Air Force pilot who becomes
                    the powerful Captain Marvel.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={shazamImage} alt="Shazam Movies className=images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">SHAZAM</Card.Title>
                  <Card.Text className="text-left">
                    Shazam! is an action-packed superhero film released in 2019.
                    The movie is based on the DC Comics character of the same
                    name, and it is part of the DC Extended Universe (DCEU).
                    Directed by David F. Sandberg, the film follows the story of
                    a young teenager who unexpectedly gains extraordinary
                    powers.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Spiderman Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">
                    SPIDERMAN : FAR FROM HOME
                  </Card.Title>
                  <Card.Text className="text-left">
                    "Spider-Man: Far From Home" is a superhero film released in
                    2019, based on the Marvel Comics character Spider-Man. The
                    film serves as a sequel to "Spider-Man: Homecoming" and is
                    part of the Marvel Cinematic Universe (MCU). It is directed
                    by Jon Watts and stars Tom Holland as Peter
                    Parker/Spider-Man.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
