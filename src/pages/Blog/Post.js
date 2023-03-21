import React, { useState } from 'react';
import styled from 'styled-components/macro';
import SideMenu from '../../components/SideMenu';
import bannerImg from './blogImg.png';
import Banner from '../../components/Banner';

function Post() {
  const [article, setArticle] = useState({
    title: '',
    content: '',
    images: [],
  });

  const handleSubmit = () => {
    if (article.title && article.content && article.images.length > 0) {
      postAricle(article);
    } else {
      alert('請填寫欄位');
    }
  };
  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setArticle({ ...article, [name]: imageUrls });
    } else {
      setArticle({ ...article, [name]: value });
    }
  };
  function postAricle(article) {
    let headers = {
      'Content-Type': 'application/json',
    };
    const url = 'https://www.saiko.world/api/1.0/admin/createBlog';
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(article),
    })
      .then((response) => response.text())
      .then((text) => console.log(text));
  }
  console.log(article);
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
            onChange={handleInput}
          />
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleInput}
          />
          <ArticleImg
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={handleInput}
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
