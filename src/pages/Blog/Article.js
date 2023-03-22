import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import io from 'socket.io-client';

const socket = io('https://www.saiko.world');
function Article() {
  const [blogData, setBlogData] = useState(null);
  const [allComments, setAllComments] = useState(null);
  const [comment, setComment] = useState({
    blog_id: '',
    username: '',
    content: '',
    floor: null,
  });
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const res = await fetch(
          `https://www.saiko.world/api/1.0/blog?id=${id}`
        );
        const resData = await res.json();
        const data = resData.data;
        data.content = data.content.split('<br/>');
        setBlogData(data);
      } catch {
        console.log('沒有抓到');
      }
    };
    getBlogData();
    const getComments = async () => {
      try {
        const res = await fetch(
          `https://saiko.world/api/1.0/blogs/${id}/Comments`
        );
        const resData = await res.json();
        setAllComments(resData.data);
      } catch {
        console.log('沒有抓到');
      }
    };
    getComments();
    socket.on('chat message', (newComment) => {
      console.log(newComment);
      setAllComments((prevComments) => [...prevComments, newComment]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  const commentPost = () => {
    fetch(`https://saiko.world/api/1.0/blogs/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((data) => {
        socket.emit('chat message', comment);
        setComment({ blog_id: '', username: '', content: '', floor: null });
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleInputChange = (e) => {
    const commented_at_unix = Date.now();
    const commented_at = new Date(commented_at_unix).toLocaleString('zh');
    setComment({
      ...comment,
      blog_id: id,
      [e.target.name]: e.target.value,
      floor: allComments.length + 1,
      commented_at: commented_at,
    });
  };
  if (!blogData) {
    return;
  }
  console.log(comment);
  return (
    <>
      <Wrapper>
        <Title>
          <h3>{`${blogData.title}分享`}</h3>
          <p>{new Date(blogData.posted_at).toLocaleDateString('en-US')}</p>
        </Title>
        <DayCards>
          <DayCard>
            <Img img={blogData.images[0]}></Img>
            <Text>
              <Day>DAY 1</Day>
              <p>{blogData.content[0]}</p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img img={blogData.images[1]}></Img>
            <Text>
              <Day>DAY 2</Day>
              <p>{blogData.content[1]}</p>
              <Description>
                帽子：Urban Research <br />
                鞋子/襪子：Vans Era Vans World Code <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img img={blogData.images[2]}></Img>
            <Text>
              <Day>DAY 3</Day>
              <p>{blogData.content[2]}</p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
                內搭： 論理 x 刃牙
                <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img img={blogData.images[3]}></Img>
            <Text>
              <Day>DAY 4</Day>
              <p>{blogData.content[3]}</p>
              <Description>
                褲子：plain-me Billy Pants 比例神褲 <br />
                鞋子/襪子：Vans Era Vans World Code <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img img={blogData.images[4]}></Img>
            <Text>
              <Day>DAY 5</Day>
              <p>{blogData.content[4]}</p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
                內搭： 論理 x 刃牙 休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
        </DayCards>
      </Wrapper>
      <Comment>
        <CommentTitle>留言</CommentTitle>
        {allComments == null ? (
          <NoComment>尚無留言</NoComment>
        ) : (
          allComments.map((allComments, i) => (
            <GuestComment key={i}>
              <Floor># {i + 1}</Floor>
              <div>
                <h4>暱稱 | {allComments.username}</h4>
                <CommentContent>{allComments.content}</CommentContent>
              </div>
              <span>{allComments.commented_at}</span>
            </GuestComment>
          ))
        )}
        <Form>
          <ArticleTitle
            type="text"
            name="username"
            placeholder="Your Name"
            onChange={handleInputChange}
            value={comment.username}
          />
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleInputChange}
            value={comment.content}></textarea>
          <Button type="button" value="Submit" onClick={commentPost} />
        </Form>
      </Comment>
    </>
  );
}
const NoComment = styled.p`
  text-align: center;
`;
const CommentContent = styled.p`
  width: 300px;
`;
const Floor = styled.p`
  align-self: center;
  margin-right: 20px;
  background-color: #000;
  height: 25px;
  border-radius: 25px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 15px;
`;
const CommentTitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;
  width: 100px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: 3px solid black;
  margin-bottom: 50px;
`;
const GuestComment = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;

  h4 {
    margin-bottom: 10px;
  }
  span {
    margin-left: auto;
    color: #4a4a4a;
    font-size: 14px;
  }
  margin-bottom: 20px;
  border-bottom: 1px solid #b3b3b3;
`;
const Comment = styled.div`
  background-color: #f7f7f7;
  padding-top: 50px;
`;
const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 40px;
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
    height: 100px;
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
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`;
const DayCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const DayCard = styled.div`
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid #c3c3c3;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`;
const Title = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: flex-end;
  padding: 30px;
  h3 {
    font-size: 45px;
  }
  p {
    margin-left: auto;
    color: #464646;
    letter-spacing: 2px;
  }
`;
const Img = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  width: 500px;
  height: 300px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
  p {
    line-height: 1.3;
  }
`;
const Day = styled.p`
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  margin-top: auto;
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 15px;
  font-size: 14px;
  color: #2f2f2f;
`;

export default Article;
