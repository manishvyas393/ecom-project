import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signin" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}
export default App;
