import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import MiniDrawer from "./components/DrawerBar";
import BodyComopnent from "./components/BodyComopnent";
import Note from "./components/Note";
import ReactGridLayout from "react-grid-layout";
function App() {
  return (
    <div className="App">
      <Header />
      <BodyComopnent />
   
      {/* <MiniDrawer /> */}

    </div>
  );
  
    // layout is an array of objects, see the demo for more complete usage
    // const layout = [
    //   { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
    //   { i: "b", x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 4 },
    //   { i: "c", x: 4, y: 0, w: 2, h: 4 }
    // ];
    // return (
    //   <ReactGridLayout
    //     className="layout"
    //     layout={layout}
    //     cols={12}
    //     rowHeight={30}
    //     width={1200}
    //   >
    //     <div key="a" style={{background:"blue"}}>a</div>
    //     <div key="b" style={{background:"blue"}}>b</div>
    //     <div key="c" style={{background:"blue"}}>c</div>
    //   </ReactGridLayout>
    // );
  
}

export default App;
