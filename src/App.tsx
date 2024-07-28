import { Button, ButtonGroup, Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
