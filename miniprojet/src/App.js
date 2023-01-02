import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';
import NewContact from './NewContact';
import ContactList from './ContactList';
import Blog from './Blog';
import NewPost from './NewPost';
import PostList from './PostList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contacts' element={<Contacts />}>
            <Route path='Create' element={<NewContact />} />
            <Route path='List' element={<ContactList />} />
          </Route>
          <Route path='/Blog' element={<Blog />}>
            <Route path='Create' element={<NewPost />} />
            <Route path='List' element={<PostList />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
