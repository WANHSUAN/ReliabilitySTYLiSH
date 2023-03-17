import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Wrapper = styled.div``;

const SideMenu = styled.div``;

const SideMenuList = styled.ul``;

const SideMenuListItem = styled.li``;

const SideMenuListImage = styled.img``;

const SideMenuListTitle = styled.p``;

const MainContainer = styled.div``;

const ClickRateContainer = styled.div``;

const ClickRate = styled.li``;

const ClickRateTitle = styled.p``;

const ClickRateImage = styled.img``;

const ClickRateNumber = styled.p``;

const ThritySalesChartSection = styled.div``;

const ThritySalesChart = styled.div``;

const ThritySaleChartTitle = styled.p``;

const EveryMonthChartSection = styled.div``;

const EveryMonthChartTitle = styled.div``;

const EveryMonthChart = styled.div``;

const CategoryChartSection = styled.ul``;

const CategoryChartItem = styled.li``;

const CategoryChartTitle = styled.p``;

const CategoryChart = styled.div``;

function ChartPage() {
  return (
    <Wrapper>
      <SideMenu>
        <SideMenuList>
          <SideMenuListItem>
            <SideMenuListImage />
            <SideMenuListTitle>報表總覽</SideMenuListTitle>
          </SideMenuListItem>
          <SideMenuListItem>
            <SideMenuListImage />
            <SideMenuListTitle>庫存查詢</SideMenuListTitle>
          </SideMenuListItem>
          <SideMenuListItem>
            <SideMenuListImage />
            <SideMenuListTitle>訂單資料</SideMenuListTitle>
          </SideMenuListItem>
        </SideMenuList>
      </SideMenu>
      <MainContainer>
        <ClickRateContainer>
          <ClickRate>
            <ClickRateNumber>10000</ClickRateNumber>
            <ClickRateTitle>全站點擊率</ClickRateTitle>
            <ClickRateImage />
          </ClickRate>
          <ClickRate>
            <ClickRateNumber>5000</ClickRateNumber>
            <ClickRateTitle>第一名點擊率</ClickRateTitle>
            <ClickRateImage />
          </ClickRate>
          <ClickRate>
            <ClickRateNumber>3000</ClickRateNumber>
            <ClickRateTitle>第二名點擊率</ClickRateTitle>
            <ClickRateImage />
          </ClickRate>
          <ClickRate>
            <ClickRateNumber>1000</ClickRateNumber>
            <ClickRateTitle>第三名點擊率</ClickRateTitle>
            <ClickRateImage />
          </ClickRate>
        </ClickRateContainer>
        <ThritySalesChartSection>
          <ThritySaleChartTitle>30 天內銷售金額</ThritySaleChartTitle>
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
