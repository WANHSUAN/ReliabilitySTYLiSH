import styled from 'styled-components/macro';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-top: 50px;
  gap: 30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`;

const SideMenuList = styled.p`
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  width: 150px;
  margin: 0 auto;
`;
const SideMenuListTitle = styled(SideMenuList)`
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;
const Icon = styled.img`
  margin-right: 10px;
  width: 30px;
`;
const SideMenu = () => {
  return (
    <MenuContainer>
      <SideMenuListTitle>Dashboard</SideMenuListTitle>
      <SideMenuList>
        <Icon src="https://cdn-icons-png.flaticon.com/512/993/993762.png" />
        報表總覽
      </SideMenuList>
      <SideMenuList>
        <Icon src="https://cdn-icons-png.flaticon.com/512/4947/4947506.png" />
        庫存管理
      </SideMenuList>
      <SideMenuList>
        <Icon src="https://cdn-icons-png.flaticon.com/512/839/839860.png" />
        訂單資料
      </SideMenuList>
    </MenuContainer>
  );
};
export default SideMenu;
