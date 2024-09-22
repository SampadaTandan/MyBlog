import "./App.css";
import Header from "./Header.js";
import Post from "./Post.js";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route index element={
            <main>
              <Header />
              <Post />
              <Post />
              <Post />
            </main>
          }/>
          <Route path={"/login"} element={
            <main>
              <Header />
              <div>login pages</div>
          </main>
          } />
      </Routes>
    
  );
}

export default App;
