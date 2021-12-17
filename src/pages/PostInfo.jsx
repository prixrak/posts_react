import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from './../API/PostService';
import { useFetching } from './../hooks/useFetching';
import Loader from './../components/UI/Loader/Loader';

const PostInfo = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(await response.json());
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(await response.json());
  })

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div className='App'>
      <h1>Post with ID = {params.id}</h1>
      {isLoading
        ? <Loader/>
        :  <div>{post.id}. {post.title}</div>
      }
      <h1>
          Comments
      </h1>
      {isComLoading
        ? <Loader/>
        : <div>
            {comments.map(comm =>
                <div key={comm.id} style={{marginTop: 15}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}
          </div>
      }
    </div>
  );
};

export default PostInfo;