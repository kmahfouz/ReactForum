import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import ThreadBox from './Pages/Threads/ThreadBox';
import TopicPage from "./Pages/TopicPage/TopicPage";
import {useState} from "react";
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";

// make function to grab token from local storage, make home page. at home page has useEFFECT, make api function called get topics then display
function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='home/topics/:topicId' element={<TopicPage/>}/>
                <Route path="/threads/:threadId" element={<TopicPage/>}/>
                {/*<Route path='/NewTopicWindow' element={<Threads/>}/>*/}
            </Routes>
        </BrowserRouter>
  );
}

export default App;
