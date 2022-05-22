import { memo, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Room from "./pages/Room";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import { store } from "./store";
import { setUser } from "./store/user/action";

import ThemeProvider from "./context/themeProvider";
import GlobalStyle from "./styles/globalStyle";
import "antd/dist/antd.css";

function App() {
  const user = store.getState().user;

  const isLoggedIn = useRef(user !== null);

  useEffect(() => {
    const storageUser = localStorage.getItem("tech4um_user");

    if (storageUser) {
      store.dispatch(setUser(JSON.parse(storageUser)));
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              {isLoggedIn.current && (
                <Route exact path="/:roomId/room" element={<Room />} />
              )}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default memo(App);
