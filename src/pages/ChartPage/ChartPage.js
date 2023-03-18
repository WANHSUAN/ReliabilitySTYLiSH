import styled from 'styled-components/macro';
import ReactLoading from 'react-loading';
import analysis from './analysis.png';
import stock from './packages.png';
import checkList from './checklist.png';
import user from './user.png';
import goldMedal from './goldMedal.png';
import silverMedal from './silverMedal.png';
import copperMedal from './copperMedal.png';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: calc(100vh - 115px);
`;

const SideMenu = styled.div`
  background-color: bisque;
  width: 20%;
  text-align: center;
`;

const SideMenuItem = styled.a`
  display: flex;
  height: 130px;
  padding-left: 20px;
  align-items: center;
`;

const SideMenuListImage = styled.img`
  width: 10%;
  height: 20%;
  margin-right: 15px;
`;

const SideMenuListTitle = styled.p`
  font-size: 25px;
`;

const MainContainer = styled.div`
  width: 1200px;
  margin: 0 100px;
`;

const ClickRateContainer = styled.ul`
  display: flex;
  gap: 38px;
  margin-top: 50px;
`;

const ClickRate = styled.li`
  width: 25%;
  height: 30%;
  list-style: none;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  padding: 30px;
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

const ClickRateImage = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 80px;
`;

const ThritySalesChartSection = styled.div`
  width: 1000px;
  height: 500px;
  margin: 0 auto;
`;

const ThritySaleChartTitle = styled.p`
  font-size: 25px;
  padding: 20px;
`;

const ThritySalesChart = styled.div`
  width: 1000px;
  height: 500px;
  background-color: lemonchiffon;
`;

const EveryMonthChartSection = styled.div`
  width: 1000px;
  height: 500px;
  margin: 0 auto;
`;

const EveryMonthChartTitle = styled.div`
  font-size: 25px;
  padding: 20px;
`;

const EveryMonthChart = styled.div`
  width: 1000px;
  height: 500px;
  background-color: lemonchiffon;
`;

const CategoryChartSection = styled.ul`
  background-color: darkorange;
  width: 500px;
`;

const CategoryChartItem = styled.li``;

const CategoryChartTitle = styled.p``;

const CategoryChart = styled.div``;

function ChartPage() {
  return (
    <Wrapper>
      <SideMenu>
        <SideMenuItem>
          <SideMenuListImage src={analysis} />
          <SideMenuListTitle>報表總覽</SideMenuListTitle>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuListImage src={stock} />
          <SideMenuListTitle>庫存查詢</SideMenuListTitle>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuListImage src={checkList} />
          <SideMenuListTitle>訂單資料</SideMenuListTitle>
        </SideMenuItem>
      </SideMenu>
      <MainContainer>
        <ClickRateContainer>
          <ClickRate color={`#e6422b`}>
            <ClickRateNumber color={`#fff`}>100</ClickRateNumber>
            <ClickRateTitle color={`#fff`}>全站點擊率</ClickRateTitle>
            <ClickRateImage src={user} />
          </ClickRate>
          <ClickRate color={`#EFA35F`}>
            <ClickRateNumber>50</ClickRateNumber>
            <ClickRateTitle>第一名點擊率</ClickRateTitle>
            <ClickRateImage src={goldMedal} />
          </ClickRate>
          <ClickRate color={`#F3E3D4`}>
            <ClickRateNumber>30</ClickRateNumber>
            <ClickRateTitle>第二名點擊率</ClickRateTitle>
            <ClickRateImage src={silverMedal} />
          </ClickRate>
          <ClickRate color={`#95C6B6`}>
            <ClickRateNumber color={`#fff`}>10</ClickRateNumber>
            <ClickRateTitle color={`#fff`}>第三名點擊率</ClickRateTitle>
            <ClickRateImage src={copperMedal} />
          </ClickRate>
        </ClickRateContainer>
        <ThritySalesChartSection>
          <ThritySaleChartTitle>30 天銷售金額</ThritySaleChartTitle>
          <ThritySalesChart></ThritySalesChart>
        </ThritySalesChartSection>
        <EveryMonthChartSection>
          <EveryMonthChartTitle>每月銷售金額</EveryMonthChartTitle>
          <EveryMonthChart></EveryMonthChart>
        </EveryMonthChartSection>
      </MainContainer>
      <CategoryChartSection>
        <CategoryChartItem>
          <CategoryChartTitle>男裝銷售量</CategoryChartTitle>
          <CategoryChart></CategoryChart>
        </CategoryChartItem>
        <CategoryChartItem>
          <CategoryChartTitle>女裝銷售量</CategoryChartTitle>
          <CategoryChart></CategoryChart>
        </CategoryChartItem>
        <CategoryChartItem>
          <CategoryChartTitle>配件銷售量</CategoryChartTitle>
          <CategoryChart></CategoryChart>
        </CategoryChartItem>
      </CategoryChartSection>
    </Wrapper>
  );
}

export default ChartPage;
