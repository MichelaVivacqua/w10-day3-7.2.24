import { Container, Dropdown } from "react-bootstrap";

const TVShows = () => {
  return (
    <Container
      fluid
      className="px-4"
      bg="dark"
      variant="dark"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="my-4 text-white">TV Shows</h2>
          <div
            className="btn-group"
            role="group"
            style={{ marginLeft: "1rem", marginTop: "0.1rem" }}
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                size="sm"
                className="rounded-0 my-4"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="text-white">
          <i className="bi bi-grid m-1"></i>
          <i className="bi bi-grid-3x3 m-1"></i>
        </div>
      </div>
    </Container>
  );
};

export default TVShows;
