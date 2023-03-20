import React from 'react';
import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 80px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
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
`;
const ArticleImg = styled.input`
  border: none;
`;
function Post() {
  return (
    <Form>
      <p>Create Article</p>
      <ArticleTitle type="text" name="title" placeholder="Title" />
      <textarea name="address" placeholder="Content"></textarea>
      <ArticleImg type="file" accept="image/*" multiple="multiple" />
      <Button type="button" value="Submit" />
    </Form>
  );
}
export default Post;
