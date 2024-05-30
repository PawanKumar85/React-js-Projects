import AppName from "./components/AppName";
import Content from "./components/Content";
import Version from "../../Todo-App-Version-1/src/components/VersionNo"
import "../../Todo-App-Version-1/src/App.css"
function App()
{
  return (
    <center>
      <AppName/>
      <Content/>
      <Version/>
    </center>
  );
}

export default App;