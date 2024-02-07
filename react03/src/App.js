import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  
function Childcomp(){
  return <div>child component</div>
}
return (
  <div className='App'>
    <Header/>
    <Body>
      <Childcomp />
       </Body>
    <Footer/>
  </div>
 );


}
export default App;