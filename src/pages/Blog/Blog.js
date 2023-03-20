import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
      <BlogTitle>
        <p>STYLiSH一週穿搭給你時尚新靈感</p>
      </BlogTitle>
      <Container>
        <PostCard>
          <Link to={'/article'}>
            <PostImg>
              <Date>
                <p>20</p>
                <p>Mar</p>
              </Date>
            </PostImg>
            <PostContent>
              <Content>
                <Title>INDIA</Title>
                <p>An upcoming superpower</p>
              </Content>
              <Meta>
                <p>
                  <span class="material-symbols-outlined">schedule</span>6 mins
                  ago
                </p>
                <p>
                  <span class="material-symbols-outlined">chat</span>39 comments
                </p>
              </Meta>
            </PostContent>
          </Link>
        </PostCard>
        <PostCard>
          <Link to={'/article'}>
            <PostImg>
              <Date>
                <p>20</p>
                <p>Mar</p>
              </Date>
            </PostImg>
            <PostContent>
              <Content>
                <Title>INDIA</Title>
                <p>An upcoming superpower</p>
              </Content>
              <Meta>
                <p>
                  <span class="material-symbols-outlined">schedule</span>6 mins
                  ago
                </p>
                <p>
                  <span class="material-symbols-outlined">chat</span>39 comments
                </p>
              </Meta>
            </PostContent>
          </Link>
        </PostCard>
        <PostCard>
          <Link to={'/article'}>
            <PostImg>
              <Date>
                <p>20</p>
                <p>Mar</p>
              </Date>
            </PostImg>
            <PostContent>
              <Content>
                <Title>INDIA</Title>
                <p>An upcoming superpower</p>
              </Content>
              <Meta>
                <p>
                  <span class="material-symbols-outlined">schedule</span>6 mins
                  ago
                </p>
                <p>
                  <span class="material-symbols-outlined">chat</span>39 comments
                </p>
              </Meta>
            </PostContent>
          </Link>
        </PostCard>
        <PostCard>
          <Link to={'/article'}>
            <PostImg>
              <Date>
                <p>20</p>
                <p>Mar</p>
              </Date>
            </PostImg>
            <PostContent>
              <Content>
                <Title>INDIA</Title>
                <p>An upcoming superpower</p>
              </Content>
              <Meta>
                <p>
                  <span class="material-symbols-outlined">schedule</span>6 mins
                  ago
                </p>
                <p>
                  <span class="material-symbols-outlined">chat</span>39 comments
                </p>
              </Meta>
            </PostContent>
          </Link>
        </PostCard>
        <PostCard>
          <Link to={'/article'}>
            <PostImg>
              <Date>
                <p>20</p>
                <p>Mar</p>
              </Date>
            </PostImg>
            <PostContent>
              <Content>
                <Title>INDIA</Title>
                <p>An upcoming superpower</p>
              </Content>
              <Meta>
                <p>
                  <span class="material-symbols-outlined">schedule</span>6 mins
                  ago
                </p>
                <p>
                  <span class="material-symbols-outlined">chat</span>39 comments
                </p>
              </Meta>
            </PostContent>
          </Link>
        </PostCard>
      </Container>
    </>
  );
}
const BlogTitle = styled.div`
  background-image: url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-size: cover;
  background-position: center;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  p {
    font-size: 40px;
    letter-spacing: 3.5px;
    line-height: 1.2;
    font-weight: 600;
    color: white;
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 0px auto;
  width: 1000px;
  margin-bottom: 100px;
`;
const PostCard = styled.div`
  position: relative;
  background: #fff;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #c7c7c8;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #000;
  }
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`;
const PostImg = styled.div`
  background-image: url('https://images.unsplash.com/photo-1597253702831-d6a6d0be4f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80');
  background-size: cover;
  height: 300px;
  position: relative;
`;
const Date = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: #fff;
  background-color: #e74c3c;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
`;
const PostContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  height: 120px;
  p {
    font-size: 18px;
    letter-spacing: 1.2px;
    color: #e74c3c;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const Meta = styled.div`
  font-size: 14px;
  color: gray;
  line-height: 1.3;
  margin-top: auto;
  display: flex;
  gap: 10px;
  p {
    display: flex;
  }
  span {
    margin-right: 5px;
    font-size: 18px;
  }
`;
export default Blog;
