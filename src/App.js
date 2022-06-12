import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Signup from "./components/Signup";
import Payment from "./components/Payment";
import Orders from "./components/Orders";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header></Header>
                <Orders></Orders>
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header></Header>
                <Payment></Payment>
              </>
            }
          />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Signup></Signup>} />
          <Route
            path="/checkout"
            element={
              <>
                <Header></Header> <Checkout></Checkout>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header></Header> <Home></Home>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
