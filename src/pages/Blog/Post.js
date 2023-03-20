import React from 'react';
import styled from 'styled-components/macro';
import SideMenu from '../../components/SideMenu';
import bannerImg from './blogImg.png';
import StockBanner from '../../components/StockBanner';

function Post() {
  return (
    <Container>
      <SideMenu />
      <Wrapper>
        <StockBanner stock={bannerImg} />
        <Form>
          <p>Create Article</p>
          <ArticleTitle type="text" name="title" placeholder="Title" />
          <textarea name="address" placeholder="Content"></textarea>
          <ArticleImg type="file" accept="image/*" multiple="multiple" />
          <Button type="button" value="Submit" />
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
