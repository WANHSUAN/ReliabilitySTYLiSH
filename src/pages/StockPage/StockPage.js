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

const StockStatusSection = styled.div``;

const StockStatus = styled.select`
  border: 1px solid #f6c43e;
  width: 130px;
  height: 32px;
  border-radius: 8px;
  background-color: #faf8e9;
  text-align: center;
  margin-top: 50px;
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
  width: 300px;
  line-height: 20px;
`;

function Stock() {
  const [selectedStatus, setSelectedStatus] = useState();
  function handleChange(e) {
    setSelectedStatus(e.target.value);
  }

  function renderSelectedComponent() {
    switch (selectedStatus) {
      case 'AllOrder':
        return (
          <>
            <AllOrder>
              <OrderStatus>訂單總覽</OrderStatus>
              <OrderSection>
                <StockTitle />
                <StockTableSection>
                  <StockTableItemGroup>
                    <StockTableItem>Yumy</StockTableItem>
                    <StockTableItem>0999999999</StockTableItem>
                    <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                    <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                    <StockTableItem>小扇紋質感上衣</StockTableItem>
                    <StockTableItem>5</StockTableItem>
                    <StockTableItem>NT$ 9000</StockTableItem>
                  </StockTableItemGroup>
                </StockTableSection>
              </OrderSection>
            </AllOrder>
          </>
        );
      case 'EstablishedOrder':
        return (
          <EstablishedOrder>
            <OrderStatus>已成立訂單</OrderStatus>
            <OrderSection>
              <StockTitle />
              <StockTableSection>
                <StockTableItemGroup>
                  <StockTableItem>Sharon</StockTableItem>
                  <StockTableItem>0918888888</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>ekasdksjl@gmail.com</StockTableItem>
                  <StockTableItem>前開衩扭結洋裝</StockTableItem>
                  <StockTableItem>3</StockTableItem>
                  <StockTableItem>NT$ 3000</StockTableItem>
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
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                  <StockTableItem>小扇紋質感上衣</StockTableItem>
                  <StockTableItem>5</StockTableItem>
                  <StockTableItem>NT$ 9000</StockTableItem>
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
                  <StockTableItem>Yumy</StockTableItem>
                  <StockTableItem>0999999999</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                  <StockTableItem>小扇紋質感上衣</StockTableItem>
                  <StockTableItem>5</StockTableItem>
                  <StockTableItem>NT$ 9000</StockTableItem>
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
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                  <StockTableItem>小扇紋質感上衣</StockTableItem>
                  <StockTableItem>5</StockTableItem>
                  <StockTableItem>NT$ 9000</StockTableItem>
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
                  <StockTableItem>Yumy</StockTableItem>
                  <StockTableItem>0999999999</StockTableItem>
                  <StockTableItem>台北市xx區 xxx 路 xx 樓</StockTableItem>
                  <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                  <StockTableItem>小扇紋質感上衣</StockTableItem>
                  <StockTableItem>5</StockTableItem>
                  <StockTableItem>NT$ 9000</StockTableItem>
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
            <StockOption value="EstablishedOrder">已成立訂單</StockOption>
            <StockOption value="PickUpGoods">撿貨</StockOption>
            <StockOption value="Delivery">出貨</StockOption>
            <StockOption value="DeliverComplete">送達</StockOption>
            <StockOption value="CompleteOrder">訂單已完成</StockOption>
          </StockStatus>
        </StockStatusSection>
        {renderSelectedComponent()}
      </Container>
    </Wrapper>
  );
}

export default Stock;
