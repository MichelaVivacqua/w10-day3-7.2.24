import { Container, Row, Col, Button, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function EditProfile() {
  return (
    <div style={{ backgroundColor: "#221f1f" }}>
      <header>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="logo"
            style={{ width: "150px", height: "auto" }}
            className="m-2"
          />
        </Link>
      </header>
      <main>
        <Container
          fluid
          data-bs-theme="dark"
          style={{ backgroundColor: "#221f1f" }}
        >
          <Row>
            <Col md={6} className="d-md-flex justify-content-end">
              <div className="container-relative">
                <img
                  src="https://static.vecteezy.com/ti/vettori-gratis/p3/22726498-patrick-stella-nel-spugna-di-mare-pantaloni-quadrati-gratuito-vettoriale.jpg"
                  alt="Patrick Stella"
                  style={{ width: "150px" }}
                />
                <i className=" bi bi-pencil-square text-white"></i>
              </div>
            </Col>
            <Col md={6}>
              <Form>
                <h2 className=" text-white text-center">Edit Profile</h2>
                <hr className="text-white" />
                <h5
                  className=" text-white mb-1"
                  style={{ backgroundColor: "grey" }}
                >
                  Strive Student
                </h5>
                <h5 className="text-white">Language:</h5>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Italiano</Dropdown.Item>
                    <Dropdown.Item>Espanol</Dropdown.Item>
                    <Dropdown.Item>Francais</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <hr className="text-white" />
                <h5 className="text-white">Maturity settings:</h5>
                <Button variant="light">ALL MATURITY RATINGS</Button>
                <h6 className="text-white pt-1">
                  Show titles of all maturity ratings for this profile
                </h6>
                <Button variant="outline-light px-2">EDIT</Button>
                <hr className="text-white" />
                <div className="mt-3 pb-3">
                  <h5 className="my-2 mb-1 text-white">Autoplay Controls:</h5>
                  <Form.Check
                    className="mb-1"
                    type="checkbox"
                    id="next-episode"
                    defaultChecked
                  />
                  <h6 className="text-white">
                    Autoplay next episode in a series on all devices
                  </h6>
                  <Form.Check
                    className="align-items-center"
                    type="checkbox"
                    id="previews"
                    defaultChecked
                  />
                  <h6 className="text-white">
                    Autoplay previews while browsing on all devices
                  </h6>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
        <footer
          className="d-flex justify-content-center p-1"
          data-bs-theme="dark"
          style={{ backgroundColor: "#221f1f" }}
        >
          <Button
            variant="outline-light bg-white m-1 px-2 text-black"
            type="button"
          >
            SAVE
          </Button>
          <Button variant="outline-grey m-1 px-2" type="button">
            CANCEL
          </Button>
          <Button variant="outline-grey m-1 px-2" type="button">
            DELETE PROFILE
          </Button>
        </footer>
      </main>
    </div>
  );
}

export default EditProfile;
