import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Breadcrumb } from "react-bootstrap";
import Dropdownn from "./Dropdown";
function App() {
  return (
    <>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light" size="lg">
        Light
      </Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <Dropdownn></Dropdownn>
    </>
  );
}

export default App;
