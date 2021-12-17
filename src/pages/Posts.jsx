import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostsFilter from '../components/PostsFilter';
import MyModal from '../components/UI/modals/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/useSortedPosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pagesCount';
import { usePagination } from '../hooks/usePagination';

function Posts() {

  const [posts, setPosts] = useState([]);

  // states
  const [filter, setFilter] = useState({sort: '', query: ''}); // filter by parametr
  const [modal, setModal] = useState(false); // set modal visible or none
  const [totalPages, setTotalPages] = useState(0); // total count of pages
  const [limit, setLimit] = useState(10); // max count of posts in one page
  const [page, setPage] = useState(1); // current page with posts 


  // use of hooks
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(await response.json());
    
    const totalCount = response.headers.get('x-total-count');
    setTotalPages(getPagesCount(totalCount, limit));
  });

  // fetch posts when page number change
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // get sorted posts 
  const pagesArray = usePagination(totalPages); // get number of pages

  // functions to manipulate with posts
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));
  const changePageNumber = (p) => setPage(p);

 
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
      <div className='page__wrapper'>
      {pagesArray.map(p => 
        <span 
          className={page === p ? 'page page__current' : 'page'}
          key={p}
          onClick={() => changePageNumber(p)}
          >
            {p}
        </span>  
      )}
      </div>

    </div>
  );
}

export default Posts;