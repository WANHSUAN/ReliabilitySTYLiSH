import React, { useState } from 'react';
import styled from 'styled-components/macro';
import SideMenu from '../../components/SideMenu';
import bannerImg from './blogImg.png';
import Banner from '../../components/Banner';

function Post() {
  const [formData, setFormData] = useState({
    title: '',
    content: ['', '', '', '', ''],
    images: [],
  });
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = name === 'images' ? event.target.files : event.target.value;

    if (name === 'content') {
      const index = event.target.dataset.index;
      setFormData((prevFormData) => {
        const updatedContent = [...prevFormData.content];
        updatedContent[index] = value;
        return {
          ...prevFormData,
          content: updatedContent,
        };
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    if (formData.title && formData.content && formData.images.length === 5) {
      formData.content = formData.content.join('<br/>');
      console.log(formData);
      postData();
      setFormData({
        title: '',
        content: ['', '', '', '', ''],
        images: [],
      });
    } else {
      alert('請加入完整文章內容');
    }
  };

  const postData = () => {
    const form = new FormData();
    form.append('title', formData.title);
    form.append('content', formData.content);
    for (let i = 0; i < formData.images.length; i++) {
      form.append('images', formData.images[i]);
    }
    fetch('https://www.saiko.world/api/1.0/admin/createBlog', {
      method: 'POST',
      body: form,
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
          <label>本周文章標題</label>
          <ArticleTitle
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
            value={formData.title}
          />
          <label>Day1</label>
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleInputChange}
            value={formData.content[0]}
            data-index={0}
          />
          <label>Day2</label>
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleInputChange}
            value={formData.content[1]}
            data-index={1}
          />
          <label>Day3</label>
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleInputChange}
            value={formData.content[2]}
            data-index={2}
          />
          <label>Day4</label>
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleInputChange}
            value={formData.content[3]}
            data-index={3}
          />
          <label>Day5</label>
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleInputChange}
            value={formData.content[4]}
            data-index={4}
          />
          <ArticleImg
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={handleInputChange}
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
    align-self: center;
  }
  textarea {
    height: 80px;
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
