import Home from "./routes/home/home.component";
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return <h1>I'm the shop page</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
  );
};

export default App;
