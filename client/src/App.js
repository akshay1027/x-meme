import MemeForm from "./components/memeForm/memeForm";
import GetMemes from "./components/getMemes/list";
import Header from "./components/header/header";
 
function App() {
  return (
    <div>
      <Header />
      <MemeForm />
      <GetMemes />
    </div>
  );
}

export default App;
