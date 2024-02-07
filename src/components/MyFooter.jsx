import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Row>
              <Col className="m-2 text-light">
                <i className="bi bi-facebook m-1"></i>
                <i className="bi bi-instagram m-1"></i>
                <i className="bi bi-twitter-x m-1"></i>
                <i className="bi bi-youtube m-1"></i>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a
                        href="#"
                        title="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none text-light"
                      >
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-decoration-none text-light"
                      >
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <Button
                  type="button"
                  className="btn btn-light btn-sm footer-button rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
