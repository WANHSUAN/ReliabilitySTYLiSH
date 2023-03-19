import React from 'react';
import styled from 'styled-components/macro';
import top from './top.png';
import down from './down.png';
import maintain from './maintain.png';
import bannerImg from './bannerImg.png';
import SideMenu from '../../components/SideMenu';
import StockBanner from '../../components/StockBanner';
import ChartCategory from './ChartCategory';
import ChartDaily from './ChartDaily';
import ChartMonth from './ChartMonth';

/*/////////////Chart/////////////*/
// const Chart2 = () => {
//   useEffect(() => {
//     c3.generate({
//       bindto: '#chart2',
//       data: {
//         columns: [['data1', 30, 200, 100, 400, 150, 250]],
//         type: 'bar',
//       },
//       bar: {
//         width: {
//           ratio: 0.5,
//         },
//       },
//       color: {
//         pattern: ['#FABF62'],
//       },
//       size: {
//         height: 300,
//       },
//       legend: {
//         position: 'right',
//       },
//     });
//   }, []);

//   return <div id="chart2" />;
// };
function ChartPage() {
  return (
    <>
      <Wrapper>
        <SideMenu />
        <MainContainer>
          <StockBanner stock={bannerImg} />
          <ClickRateContainer>
            <ClickRate>
              <ClickRateNumber color={`#ff5733`}>
                100<span>全站點擊率</span>
              </ClickRateNumber>
              <ClickRateNumber color={`#ff5733`}>
                60%<span>轉換率</span>
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
              <ChartTitle>30 天銷售金額</ChartTitle>
              <ChartSelect>
                <option>30天內</option>
                <option>60天內</option>
                <option>90天內</option>
                <option>120天內</option>
              </ChartSelect>
            </TimeseriesHeader>
            <ChartImg>
              <ChartDaily />
            </ChartImg>
          </Timeseries>
          <Timeseries>
            <ChartTitle>每月銷售金額</ChartTitle>
            <ChartImg>
              <ChartMonth />
            </ChartImg>
          </Timeseries>
          <Rank>
            <ChartTitle>銷售排行</ChartTitle>
            <RankItems>
              <RankTopItems>
                <RankItem>
                  <span>TOP1</span>前開扭結洋裝
                  <p>40件</p>
                  <RankImg rankUrl={top} />
                </RankItem>
                <RankItem>
                  <span>TOP1</span>前開扭結洋裝
                  <p>40件</p>
                  <RankImg rankUrl={down} />
                </RankItem>
                <RankItem>
                  <span>TOP1</span>前開扭結洋裝
                  <p>40件</p>
                  <RankImg rankUrl={maintain} />
                </RankItem>
              </RankTopItems>
              <RankTopItems2>
                <RankItem>
                  <span>4</span>前開扭結洋裝
                  <p>40件</p>
                  <RankImg2 rankUrl={maintain} />
                </RankItem>
                <RankItem>
                  <span>4</span>前開扭結洋裝
                  <p>40件</p>
                  <RankImg2 rankUrl={maintain} />
                </RankItem>
                <RankItem>
                  <span>4</span>前開扭結洋裝
                  <p>40件</p>
                  <RankImg2 rankUrl={maintain} />
                </RankItem>
                <RankItem>
                  <span>4</span>前開扭結洋裝
                  <p>40件</p>
                  <RankImg2 rankUrl={maintain} />
                </RankItem>
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

/*/////////////Pie/////////////*/
const ClickRateContainer = styled.ul`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ClickRate = styled.li`
  list-style: none;
  background-color: #fff;
  border-radius: 15px;
  height: 250px;
  padding: 50px;
  display: flex;
  gap: 30px;
  justify-content: space-around;
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
`;
const ChartImg = styled.div`
  padding: 20px;
`;
const Timeseries = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
`;
const TimeseriesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChartSelect = styled.select`
  height: 20px;
  margin-right: 50px;
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
`;
const RankItem = styled.div`
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 15px;
  p {
    margin-left: 20px;
  }
`;
const RankImg = styled.div`
  margin-top: 5px;
  margin-left: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30px;
  width: 30px;
  background-image: url(${(props) => props.rankUrl});
`;
const RankImg2 = styled(RankImg)`
  height: 15px;
  margin-top: 3px;
`;
export default ChartPage;
