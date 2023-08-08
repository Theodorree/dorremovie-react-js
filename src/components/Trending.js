import { Card, Container, Row, Col, Image } from "react-bootstrap";
import extractionImage from "../assets/images/trending/extraction.jpg";
import meg2Image from "../assets/images/trending/meg2.jpg";
import interstellarImage from "../assets/images/trending/interstellar.jpg";
import missionimpossibleImage from "../assets/images/trending/missionimpossible.jpg";
import theflashImage from "../assets/images/trending/theflash.jpg";
import transformersImage from "../assets/images/trending/transformers.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image
                src={extractionImage}
                alt="Extraction Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">EXTRACTION 2</Card.Title>
                  <Card.Text className="text-left">
                    Extraction 2 is an action-packed, adrenaline-fueled sequel
                    that takes audiences on a heart-stopping rollercoaster ride.
                    Set in the gritty underworld of international espionage, the
                    film follows the intense journey of Tyler Rake, a fearless
                    black-ops mercenary portrayed by the charismatic Chris
                    Hemsworth.
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
              <Image src={meg2Image} alt="Meg 2 Movies className=images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">
                    MEG 2 : THE TRENCH
                  </Card.Title>
                  <Card.Text className="text-left">
                    As the story unfolds, Dr. Taylor must assemble a team of
                    daring experts and adventurers to confront this unimaginable
                    terror and protect humanity from impending disaster. The
                    stakes are higher than ever as they embark on a
                    pulse-pounding mission to unravel the mystery of the
                    megalodon's return and understand the ancient civilization
                    that holds the key to survival.
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
                src={interstellarImage}
                alt="Interstellar Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">INTERSTELLAR</Card.Title>
                  <Card.Text className="text-left">
                    Interstellar is an epic science-fiction film that takes
                    audiences on an awe-inspiring and captivating journey beyond
                    the stars. Directed by the visionary Christopher Nolan, the
                    film first graced the silver screen in 2014 and left an
                    indelible mark on the science-fiction genre. The story
                    unfolds in a not-so-distant future where Earth is on the
                    brink of ecological collapse.
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
                src={missionimpossibleImage}
                alt="Mission Impossible Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">
                    MISSION IMPOSSIBLE : DARK RECKONING
                  </Card.Title>
                  <Card.Text className="text-left">
                    Mission Impossible: Dark Reckoning is an exhilarating
                    action-packed thriller that takes the renowned espionage
                    franchise to new heights. Directed by a masterful filmmaker,
                    the film delivers a high-octane, heart-pounding cinematic
                    experience that keeps audiences on the edge of their seats
                    from start to finish.
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
                src={theflashImage}
                alt="The Flash Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">THE FLASH</Card.Title>
                  <Card.Text className="text-left">
                    "The Flash" is an action-packed superhero film that delves
                    into the thrilling world of DC Comics. Directed by a
                    visionary filmmaker, the movie follows the life of Barry
                    Allen, an ordinary forensic scientist with an extraordinary
                    secret. After a tragic accident at a particle accelerator
                    experiment, Barry gains the incredible power of superhuman
                    speed, transforming him into the fastest man alive.
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
                src={transformersImage}
                alt="Transformers Movies className=images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">
                    TRANSFORMERS : RISE OF THE BEASTS
                  </Card.Title>
                  <Card.Text className="text-left">
                    As the Maximals, led by the fearless Optimus Primal, arrive
                    to protect Earth from the encroaching Predacon forces, the
                    stakes escalate, and alliances are tested. Amidst the epic
                    battles and intense conflicts, a human team, led by a brave
                    archaeologist and a skilled military commander, becomes an
                    integral part of the struggle to safeguard humanity and
                    prevent a global catastrophe.
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

export default Trending;
