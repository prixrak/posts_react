import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, 
      id: Date.now()
    };
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <form>
      <MyInput 
        typeof='text' 
        placeholder='title'
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
      />  
      <MyInput 
        typeof='text' 
        placeholder='description'
        value={post.body}
        onChange={(e) => setPost({...post, body: e.target.value})}
      />
      <MyButton onClick={addNewPost}>Post</MyButton>
  </form>
  );
};

export default PostForm;