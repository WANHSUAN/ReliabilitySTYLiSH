import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Wrapper = styled.div``;

const SideMenu = styled.div``;

const SideMenuList = styled.ul``;

const SideMenuListItem = styled.li``;

const SideMenuListImage = styled.img``;

const SideMenuListTitle = styled.p``;

const ClickRateContainer = styled.div``;

const ClickRate = styled.li``;

const ClickRateTitle = styled.p``;

const ClickRateNumber = styled.p``;

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
      <ClickRateContainer>
        <ClickRate>
          <ClickRateNumber></ClickRateNumber>
          <ClickRateTitle></ClickRateTitle>
        </ClickRate>
        <ClickRate>
          <ClickRateNumber></ClickRateNumber>
          <ClickRateTitle></ClickRateTitle>
        </ClickRate>
        <ClickRate>
          <ClickRateNumber></ClickRateNumber>
          <ClickRateTitle></ClickRateTitle>
        </ClickRate>
        <ClickRate>
          <ClickRateNumber></ClickRateNumber>
          <ClickRateTitle></ClickRateTitle>
        </ClickRate>
      </ClickRateContainer>
    </Wrapper>
  );
}

export default ChartPage;
