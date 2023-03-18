import React from 'react';
import styled from 'styled-components/macro';
import './reset.css';
import GlobalStyle from './GobalStyle';
import 'c3/c3.css';
import c3 from 'c3';
import SideMenu from '../../components/SideMenu';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  min-height: calc(100vh - 115px);
`;

/*/////////////Pie/////////////*/
const ClickRateContainer = styled.ul`
  display: grid;
  margin-top: 50px;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
`;

const ClickRate = styled.li`
  list-style: none;
  background-color: ${(props) => props.color};
  border-radius: 15px;
  height: 250px;
  padding: 20px;
`;

const ClickRateNumber = styled.p`
  color: ${(props) => props.color};
  font-size: 40px;
  font-weight: 600;
`;

const ClickRateTitle = styled.p`
  color: ${(props) => props.color};
  margin-top: 20px;
  font-size: 20px;
`;

/*/////////////Main/////////////*/
const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 70%;
`;

const ChartTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 30px;
`;
const ChartImg = styled.div`
  padding: 20px;
`;
const Timeseries = styled.div``;
/*/////////////Rank/////////////*/
const RankItems = styled.div`
  display: flex;
  gap: 50px;
`;
const Rank = styled.div``;
const RankItem = styled.p`
  margin-bottom: 15px;
`;
const RankItemTop3 = styled(RankItem)`
  font-size: 24px;
`;

/*/////////////Chart/////////////*/
const Chart = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        type: 'line',
      },
      size: {
        height: 300,
      },
    });
  }, []);

  return <div id="chart" />;
};

const Chart2 = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        type: 'line',
      },
      size: {
        height: 300,
      },
    });
  }, []);

  return <div id="chart2" />;
};

const Chart3 = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: '#chart3',
      data: {
        columns: [
          ['衣服', 10],
          ['衣服2', 20],
          ['衣服3', 5],
        ],
        type: 'pie',
        colors: {
          衣服: '#E68618',
          衣服2: '#F280CA',
          衣服3: '#26BFC7',
        },
      },
      size: {
        height: 200,
      },
    });
  }, []);

  return <div id="chart3" />;
};

function ChartPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <SideMenu />
        <MainContainer>
          <ClickRateContainer>
            <ClickRate color={`#e6422b`}>
              <ClickRateNumber color={`#fff`}>100</ClickRateNumber>
              <ClickRateTitle color={`#fff`}>全站點擊率</ClickRateTitle>
            </ClickRate>
            <ClickRate color={`#EFA35F`}>
              <Chart3 />
            </ClickRate>
            <ClickRate color={`#F3E3D4`}></ClickRate>
            <ClickRate color={`#95C6B6`}></ClickRate>
          </ClickRateContainer>
          <Timeseries>
            <ChartTitle>30 天銷售金額</ChartTitle>
            <ChartImg>
              <Chart />
            </ChartImg>
          </Timeseries>
          <Timeseries>
            <ChartTitle>每月銷售金額</ChartTitle>
            <ChartImg>
              <Chart2 />
            </ChartImg>
          </Timeseries>
          <Rank>
            <ChartTitle>銷售排行</ChartTitle>
            <RankItems>
              <div>
                <RankItemTop3>
                  <span>TOP1</span> 前開扭結洋裝
                </RankItemTop3>
                <RankItemTop3>
                  <span>TOP2</span> 前開扭結洋裝
                </RankItemTop3>
                <RankItemTop3>
                  <span>TOP3</span> 前開扭結洋裝
                </RankItemTop3>
              </div>
              <div>
                <RankItem>前開扭結洋裝</RankItem>
                <RankItem>前開扭結洋裝</RankItem>
                <RankItem>前開扭結洋裝</RankItem>
                <RankItem>前開扭結洋裝</RankItem>
                <RankItem>前開扭結洋裝</RankItem>
                <RankItem>前開扭結洋裝</RankItem>
                <RankItem>前開扭結洋裝</RankItem>
              </div>
            </RankItems>
          </Rank>
        </MainContainer>
      </Wrapper>
    </>
  );
}

export default ChartPage;
