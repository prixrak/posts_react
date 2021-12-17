import React, { useState, useEffect } from 'react';
import './styles/App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostsFilter from './components/PostsFilter';
import MyModal from './components/UI/modals/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/useSortedPosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {

  const [posts, setPosts] = useState([]);

  // states
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  // use of hooks
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })
  
  // functions 
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

  useEffect(() => {
    fetchPosts();
  }, []);
 
  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={e => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visibel={modal} setVisibel={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px'}}/>
      <PostsFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Error: {postError}</h1>
      }
      {isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div> 
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts1'/>
      }
    </div>
  );
}

export default App;