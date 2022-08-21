import { useEffect } from "react";
import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
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
