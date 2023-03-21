import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import bannerImg from './bannerImg.png';
import SideMenu from '../../components/SideMenu';
import Banner from '../../components/Banner';
import ChartCategory from './ChartCategory';
import ChartDaily from './ChartDaily';
import ChartMonth from './ChartMonth';

function ChartPage() {
  const url = 'https://www.saiko.world/api/1.0/admin/salesByProduct';
  const [rankData, setRankData] = useState([]);
  const [num, setNum] = useState(1);
  const [dayText, setDayText] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data;
        setRankData(newData.sort((a, b) => b.qty - a.qty));
      });
  }, []);
  function handleInput(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setDayText(selectedOption.text);
    setNum(e.target.value);
  }
  return (
    <>
      <Wrapper>
        <SideMenu />
        <MainContainer>
        <Banner
          backgroundColor={`#f5eef8`}
          title={'Yumy'}
          message={'來看看 STYLiSH 的營收狀況吧!'}
          stock={bannerImg}
        />
          <ClickRateContainer>
            <ClickRate>
              <ClickRateNumber color={`#ff5733`}>
                {Math.floor(Math.random() * 891 + 100)}
                <span>全站點擊率</span>
              </ClickRateNumber>
              <ClickRateNumber color={`#ff5733`}>
                {Math.floor(Math.random() * 90 + 10)}%<span>轉換率</span>
              </ClickRateNumber>
            </ClickRate>
            <Category>
              <ChartCategory type="men" />
            </Category>
            <Category>
              <ChartCategory type="women" />
            </Category>
            <Category>
              <ChartCategory type="accessories" />
            </Category>
          </ClickRateContainer>
          <Timeseries>
            <TimeseriesHeader>
              <ChartTitle>
                銷售金額<span>/day</span>
              </ChartTitle>
              <ChartSelect onChange={handleInput}>
                <option value="1">30天內</option>
                <option value="2">60天內</option>
                <option value="3">90天內</option>
                <option value="4">120天內</option>
              </ChartSelect>
            </TimeseriesHeader>
            <ChartImg>
              <ChartDaily num={num} dayText={dayText} />
            </ChartImg>
          </Timeseries>
          <Timeseries>
            <ChartTitle>
              銷售金額<span>/month</span>
            </ChartTitle>
            <ChartImg>
              <ChartMonth />
            </ChartImg>
          </Timeseries>
          <Rank>
            <ChartTitle>
              銷售排行<span>/month</span>
            </ChartTitle>
            <RankItems>
              <RankTopItems>
                {rankData.slice(0, 3).map((item, index) => (
                  <RankItem key={index}>
                    <span>{`TOP${index + 1}`}</span>
                    {item.name}
                    <p>{`${item.qty}件`}</p>
                  </RankItem>
                ))}
              </RankTopItems>
              <RankTopItems2>
                {rankData.slice(3, 7).map((item, index) => (
                  <RankItem key={index}>
                    <span>{`TOP${index + 4}`}</span>
                    {item.name}
                    <p>{`${item.qty}件`}</p>
                  </RankItem>
                ))}
              </RankTopItems2>
            </RankItems>
          </Rank>
        </MainContainer>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  min-height: calc(100vh - 115px);
  background-color: #f7f7f7;
`;

const ClickRateContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ClickRate = styled.div`
  list-style: none;
  background-color: #fff;
  border-radius: 15px;
  height: 250px;
  padding: 50px;
  display: flex;
  gap: 30px;
  justify-content: space-around;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`;
const Category = styled(ClickRate)`
  position: relative;
  padding: 0px;
  justify-content: center;
  align-items: center;
  p {
    position: absolute;
    font-size: 20px;
    top: 20px;
    left: 20px;
    margin-bottom: 10px;
  }
`;

const ClickRateNumber = styled.p`
  color: ${(props) => props.color};
  font-size: 70px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    padding-top: 15px;
    font-size: 20px;
    color: #343434;
  }
`;

/*/////////////Main/////////////*/
const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 70%;
  margin-bottom: 150px;
`;

const ChartTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 30px;
  background-color: #ff5733;
  color: white;
  padding: 10px;
  border-radius: 25px;
  width: 200px;
  text-align: center;
  span {
    font-size: 14px;
    padding-left: 5px;
  }
`;
const ChartImg = styled.div`
  padding: 20px;
`;
const Timeseries = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`;
const TimeseriesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChartSelect = styled.select`
  margin-right: 50px;
  display: flex;
  gap: 5px;
  font-size: 14px;
  align-items: center;
  input {
    margin: 0px;
  }
`;
/*/////////////Rank/////////////*/
const RankItems = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
`;
const RankTopItems = styled.div`
  padding: 20px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  span {
    margin-right: 20px;
    color: #ff5733;
    font-weight: 600;
  }
`;
const RankTopItems2 = styled(RankTopItems)`
  font-size: 20px;
`;
const Rank = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`;
const RankItem = styled.div`
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 15px;
  gap: 10px;
  p {
    margin-left: auto;
  }
`;
export default ChartPage;
