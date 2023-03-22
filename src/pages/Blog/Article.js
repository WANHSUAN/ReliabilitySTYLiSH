import React from 'react';
import styled from 'styled-components/macro';

function Article() {
  return (
    <>
      <Wrapper>
        <Title>
          <h3>清新約會 | 一週穿搭 分享</h3>
          <p>2023 0320</p>
        </Title>
        <DayCards>
          <DayCard>
            <Img></Img>
            <Text>
              <Day>DAY 1</Day>
              <p>
                牛仔外套老樣子，20
                度上下穿很舒服，再冷一點，可以當成中間層搭配。很好用~
              </p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
                內搭： 論理 x 刃牙
                <br />
                褲子：plain-me Billy Pants 比例神褲 <br />
                鞋子/襪子：Vans Era Vans World Code <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img></Img>
            <Text>
              <Day>DAY 1</Day>
              <p>
                牛仔外套老樣子，20
                度上下穿很舒服，再冷一點，可以當成中間層搭配。很好用~
              </p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
                內搭： 論理 x 刃牙
                <br />
                褲子：plain-me Billy Pants 比例神褲 <br />
                鞋子/襪子：Vans Era Vans World Code <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img></Img>
            <Text>
              <Day>DAY 1</Day>
              <p>
                牛仔外套老樣子，20
                度上下穿很舒服，再冷一點，可以當成中間層搭配。很好用~
              </p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
                內搭： 論理 x 刃牙
                <br />
                褲子：plain-me Billy Pants 比例神褲 <br />
                鞋子/襪子：Vans Era Vans World Code <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img></Img>
            <Text>
              <Day>DAY 1</Day>
              <p>
                牛仔外套老樣子，20
                度上下穿很舒服，再冷一點，可以當成中間層搭配。很好用~
              </p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
                內搭： 論理 x 刃牙
                <br />
                褲子：plain-me Billy Pants 比例神褲 <br />
                鞋子/襪子：Vans Era Vans World Code <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
          <DayCard>
            <Img></Img>
            <Text>
              <Day>DAY 1</Day>
              <p>
                牛仔外套老樣子，20
                度上下穿很舒服，再冷一點，可以當成中間層搭配。很好用~
              </p>
              <Description>
                帽子：Urban Research <br />
                外搭：plain-me水洗鬆身丹寧夾克 <br />
                內搭： 論理 x 刃牙
                <br />
                褲子：plain-me Billy Pants 比例神褲 <br />
                鞋子/襪子：Vans Era Vans World Code <br />
                休閒鞋 包包：N/A 手錶/配件：N/A
              </Description>
            </Text>
          </DayCard>
        </DayCards>
      </Wrapper>
      <Comment>
        <CommentTitle>留言</CommentTitle>
        <GuestComment>
          <div>
            <h4>暱稱 | 小狗</h4>
            <p>留言 | 挖好好抗 全部都想買!</p>
          </div>
          <span>2023/02/22 8:00</span>
        </GuestComment>
        <GuestComment>
          <div>
            <h4>暱稱 | 小狗</h4>
            <p>留言 | 挖好好抗 全部都想買!</p>
          </div>
          <span>2023/02/22 8:00</span>
        </GuestComment>
        <GuestComment>
          <div>
            <h4>暱稱 | 小狗</h4>
            <p>留言 | 挖好好抗 全部都想買!</p>
          </div>
          <span>2023/02/22 8:00</span>
        </GuestComment>
        <GuestComment>
          <div>
            <h4>暱稱 | 小狗</h4>
            <p>留言 | 挖好好抗 全部都想買!</p>
          </div>
          <span>2023/02/22 8:00</span>
        </GuestComment>
        <Form>
          <ArticleTitle type="text" name="Name" placeholder="Name" />
          <textarea name="Content" placeholder="Content"></textarea>
          <Button type="button" value="Submit" />
        </Form>
      </Comment>
    </>
  );
}
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
  background-image: url('https://images.unsplash.com/photo-1543405075-f0d9e0457476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
  width: 500px;
  height: 300px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
