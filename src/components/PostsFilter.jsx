import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';
const PostsFilter = ({filter, setFilter}) => {
  return (
    <div>
    <MyInput 
      value={filter.query}
      onChange={(e) => setFilter({...filter, query: e.target.value})}
      placeholder='Search...'
    />
    <MySelect 
      value={filter.sort}
      onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
      defaultValue={'Sort By'}
      options={[
        {value: 'title', name: 'By Title'},
        {value: 'body', name: 'By Description'},
      ]}
    />
  </div>
  );
};

export default PostsFilter;