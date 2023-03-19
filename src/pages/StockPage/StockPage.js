import { useState } from 'react';
import styled from 'styled-components/macro';
import SideMenu from '../../components/SideMenu';
import Banner from '../../components/StockBanner';
import BannerImg from '../StockPage/stock.png';
import StockTitle from '../StockPage/StockTitle';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 70%;
  min-height: calc(100vh - 115px);
  margin: 0 auto 100px;
`;

const StockStatusSection = styled.div`
  text-align: right;
  margin-top: 50px;
`;

const StockStatus = styled.select`
  border: 1px solid #f6c43e;
  width: 130px;
  height: 32px;
  border-radius: 8px;
  background-color: #faf8e9;
  text-align: center;
  margin-top: 30px;
`;

const StockListEdit = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #faf8e9;
  border-radius: 5px;
  background-color: #f5d990;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9bb15;
    color: #fff;
  }
`;

const StockListSave = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #faf8e9;
  border-radius: 5px;
  background-color: #f5d990;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9bb15;
    color: #fff;
  }
`;

const StockOption = styled.option``;

const AllOrder = styled.div`
  padding: 10px 0 40px 0;
`;

const EstablishedOrder = styled.div`
  padding: 10px 0 40px 0;
`;
const PickUpGoods = styled.div`
  padding: 10px 0 40px 0;
`;

const Delivery = styled.div`
  padding: 10px 0 40px 0;
`;

const DeliverComplete = styled.div`
  padding: 10px 0 40px 0;
`;

const CompleteOrder = styled.div`
  padding: 10px 0 40px 0;
`;

const OrderStatus = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 50px 0 20px 0;
  padding: 25px 0;
  color: #d46304;
`;

const OrderSection = styled.div`
  box-shadow: 1px 1px 5px #c2c4c3;
`;

const StockTableSection = styled.div`
  ul:nth-child(odd) {
    background-color: white;
  }

  ul:nth-child(even) {
    background-color: #fcf6e7;
  }
`;

const StockTableItemGroup = styled.ul`
  display: flex;
  font-size: 10px;
  padding: 20px 0;
  text-align: center;
  border-radius: 3px;
`;

const StockTableItem = styled.li`
  width: 250px;
  line-height: 20px;

  &:nth-child(odd) {
    width: 220px;
  }
`;

const StockTableSelect = styled.select`
  border: 1px solid #f6c43e;
  width: 180px;
  height: 25px;
  margin-right: 10px;
  border-radius: 8px;
  background-color: #faf8e9;
  text-align: center;
`;

const StockTableOption = styled.option``;

function Stock() {
  const [selectedStatus, setSelectedStatus] = useState();
  function handleChange(e) {
    setSelectedStatus(e.target.value);
  }

  function renderSelectedComponent() {
    switch (selectedStatus) {
      case 'AllOrder':
        return (
          <AllOrder>
            <OrderStatus>訂單總覽</OrderStatus>
            <OrderSection>
              <StockTitle />
              <StockTableSection>
                <StockTableItemGroup>
                  <StockTableItem>Yumy</StockTableItem>
                  <StockTableItem>0999999999</StockTableItem>
                  <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>小扇紋質感上衣 5 件</StockTableItem>
                  <StockTableItem>NT$ 9000</StockTableItem>
                  <StockTableSelect>
                    <StockTableOption>訂單已成立</StockTableOption>
                    <StockTableOption>揀貨</StockTableOption>
                    <StockTableOption>出貨</StockTableOption>
                    <StockTableOption>送達</StockTableOption>
                  </StockTableSelect>
                </StockTableItemGroup>
              </StockTableSection>
            </OrderSection>
          </AllOrder>
        );
      case 'EstablishedOrder':
        return (
          <EstablishedOrder>
            <OrderStatus>訂單已成立</OrderStatus>
            <OrderSection>
              <StockTitle />
              <StockTableSection>
                <StockTableItemGroup>
                  <StockTableItem>Sharon</StockTableItem>
                  <StockTableItem>0918888888</StockTableItem>
                  <StockTableItem>ekasdksjl@gmail.com</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>開衩扭結洋裝 3 件</StockTableItem>
                  <StockTableItem>NT$ 3000</StockTableItem>
                  <StockTableSelect>
                    <StockTableOption>訂單已成立</StockTableOption>
                    <StockTableOption>揀貨</StockTableOption>
                    <StockTableOption>出貨</StockTableOption>
                    <StockTableOption>送達</StockTableOption>
                  </StockTableSelect>
                </StockTableItemGroup>
              </StockTableSection>
            </OrderSection>
          </EstablishedOrder>
        );
      case 'PickUpGoods':
        return (
          <PickUpGoods>
            <OrderStatus>揀貨</OrderStatus>
            <OrderSection>
              <StockTitle />
              <StockTableSection>
                <StockTableItemGroup>
                  <StockTableItem>Yumy</StockTableItem>
                  <StockTableItem>0999999999</StockTableItem>
                  <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>小扇紋質感上衣 5 件</StockTableItem>
                  <StockTableItem>NT$ 9000</StockTableItem>
                  <StockTableSelect>
                    <StockTableOption>訂單已成立</StockTableOption>
                    <StockTableOption>揀貨</StockTableOption>
                    <StockTableOption>出貨</StockTableOption>
                    <StockTableOption>送達</StockTableOption>
                  </StockTableSelect>
                </StockTableItemGroup>
              </StockTableSection>
            </OrderSection>
          </PickUpGoods>
        );
      case 'Delivery':
        return (
          <Delivery>
            <OrderStatus>出貨</OrderStatus>
            <OrderSection>
              <StockTitle />
              <StockTableSection>
                <StockTableItemGroup>
                  <StockTableItem>Sharon</StockTableItem>
                  <StockTableItem>0918888888</StockTableItem>
                  <StockTableItem>ekasdksjl@gmail.com</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>開衩扭結洋裝 3 件</StockTableItem>
                  <StockTableItem>NT$ 3000</StockTableItem>
                  <StockTableSelect>
                    <StockTableOption>訂單已成立</StockTableOption>
                    <StockTableOption>揀貨</StockTableOption>
                    <StockTableOption>出貨</StockTableOption>
                    <StockTableOption>送達</StockTableOption>
                  </StockTableSelect>
                </StockTableItemGroup>
              </StockTableSection>
            </OrderSection>
          </Delivery>
        );
      case 'DeliverComplete':
        return (
          <DeliverComplete>
            <OrderStatus>送達</OrderStatus>
            <OrderSection>
              <StockTitle />
              <StockTableSection>
                <StockTableItemGroup>
                  <StockTableItem>Yumy</StockTableItem>
                  <StockTableItem>0999999999</StockTableItem>
                  <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>小扇紋質感上衣 5 件</StockTableItem>
                  <StockTableItem>NT$ 9000</StockTableItem>
                  <StockTableSelect>
                    <StockTableOption>訂單已成立</StockTableOption>
                    <StockTableOption>揀貨</StockTableOption>
                    <StockTableOption>出貨</StockTableOption>
                    <StockTableOption>送達</StockTableOption>
                  </StockTableSelect>
                </StockTableItemGroup>
              </StockTableSection>
            </OrderSection>
          </DeliverComplete>
        );
      case 'CompleteOrder':
        return (
          <CompleteOrder>
            <OrderStatus>訂單已完成</OrderStatus>
            <OrderSection>
              <StockTitle />
              <StockTableSection>
                <StockTableItemGroup>
                  <StockTableItem>Sharon</StockTableItem>
                  <StockTableItem>0918888888</StockTableItem>
                  <StockTableItem>ekasdksjl@gmail.com</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>小扇紋質感上衣 5 件</StockTableItem>
                  <StockTableItem>NT$ 3000</StockTableItem>
                  <StockTableSelect>
                    <StockTableOption>訂單已成立</StockTableOption>
                    <StockTableOption>揀貨</StockTableOption>
                    <StockTableOption>出貨</StockTableOption>
                    <StockTableOption>送達</StockTableOption>
                  </StockTableSelect>
                </StockTableItemGroup>
              </StockTableSection>
            </OrderSection>
          </CompleteOrder>
        );
      default:
        return;
    }
  }

  return (
    <Wrapper>
      <SideMenu />
      <Container>
        <Banner
          backgroundColor={`#f5eef8`}
          title={'Sharon'}
          message={'準備好管理您的訂單了嗎？'}
          stock={BannerImg}
        />
        <StockStatusSection>
          <StockStatus onChange={handleChange}>
            <StockOption value="AllOrder">訂單總覽</StockOption>
            <StockOption value="EstablishedOrder">訂單已成立</StockOption>
            <StockOption value="PickUpGoods">撿貨</StockOption>
            <StockOption value="Delivery">出貨</StockOption>
            <StockOption value="DeliverComplete">送達</StockOption>
            <StockOption value="CompleteOrder">訂單已完成</StockOption>
          </StockStatus>
          <StockListEdit>Edit</StockListEdit>
          <StockListSave>Save</StockListSave>
        </StockStatusSection>
        {renderSelectedComponent()}
      </Container>
    </Wrapper>
  );
}

export default Stock;
