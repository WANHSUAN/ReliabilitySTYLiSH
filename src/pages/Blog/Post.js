import React, { useState } from 'react';
import styled from 'styled-components/macro';
import SideMenu from '../../components/SideMenu';
import bannerImg from './blogImg.png';
import Banner from '../../components/Banner';

function Post() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImages(event.target.files);
  };
  const handleSubmit = () => {
    if (title && content && images.length === 7) {
      PostData();
      setTitle('');
      setContent('');
    } else {
      alert('請加入完整文章內容');
    }
  };
  const PostData = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    fetch('https://www.saiko.world/api/1.0/admin/createBlog', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Container>
      <SideMenu />
      <Wrapper>
        <Banner
          backgroundColor={`#f5eef8`}
          title={'Yumy'}
          message={'準備發布一篇一周穿搭~'}
          stock={bannerImg}
        />
        <Form>
          <p>Create Article</p>
          <ArticleTitle
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleContentChange}
            value={content}
          />
          <ArticleImg
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={handleImageChange}
            name="images"
          />
          <Button onClick={handleSubmit} type="button" value="Submit" />
        </Form>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 80px auto;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
  input {
    padding: 5px;
    width: 100%;
  }
  p {
    font-size: 24px;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
  }
  textarea {
    height: 200px;
    width: 100%;
    padding: 5px;
    border: 1px solid #373737;
  }
`;
const ArticleTitle = styled.input`
  border: 1px solid #373737;
  height: 30px;
`;
const Button = styled.input`
  height: 35px;
  border: none;
  background-color: #373737;
  color: white;
  letter-spacing: 1.5px;
  border-radius: 5px;
`;
const ArticleImg = styled.input``;
export default Post;
