import Checkbox from "./components/Checkbox";
import { ChackboxWrapper, Title } from "./styles";

function App() {
  return (
    <ChackboxWrapper>
      <Title>Compound components Example</Title>
      <Checkbox label="Are you ok?" />
    </ChackboxWrapper>
  );
}

export default App;
