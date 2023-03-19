import styled from 'styled-components/macro';
import SideMenu from '../../components/SideMenu';
import Banner from '../../components/StockBanner';
import BannerImg from '../StockPage/stock.png';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 70%;
  min-height: calc(100vh - 115px);
  margin: 0 auto 100px;
`;

const StockTable = styled.div`
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

const StockTableTitle = styled.ul`
  display: flex;
  background-color: #fbe4ae;
  color: #000;
  font-weight: 600;
  padding: 10px 0;
  text-align: center;
  border-radius: 3px 3px 0 0;
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

const StockTableTitleItem = styled.li`
  width: 300px;
`;
const StockTableItem = styled.li`
  width: 300px;
  line-height: 20px;
`;

function Stock() {
  return (
    <Wrapper>
      <SideMenu />
      <Container>
        <Banner stock={BannerImg} />
        <StockTable>
          <OrderStatus>未完成訂單</OrderStatus>
          <OrderSection>
            <StockTableTitle>
              <StockTableTitleItem>會員名稱</StockTableTitleItem>
              <StockTableTitleItem>聯絡電話</StockTableTitleItem>
              <StockTableTitleItem>聯絡地址</StockTableTitleItem>
              <StockTableTitleItem>Email</StockTableTitleItem>
              <StockTableTitleItem>商品名稱</StockTableTitleItem>
              <StockTableTitleItem>商品數量</StockTableTitleItem>
              <StockTableTitleItem>總金額</StockTableTitleItem>
            </StockTableTitle>
            <StockTableSection>
              <StockTableItemGroup>
                <StockTableItem>Sharon</StockTableItem>
                <StockTableItem>0918888888</StockTableItem>
                <StockTableItem>台北市 xx 區 xxx 路 xx 樓</StockTableItem>
                <StockTableItem>ekasdksjl@gmail.com</StockTableItem>
                <StockTableItem>前開衩扭結洋裝</StockTableItem>
                <StockTableItem>3</StockTableItem>
                <StockTableItem>NT$ 3000</StockTableItem>
              </StockTableItemGroup>
              <StockTableItemGroup>
                <StockTableItem>Sharon</StockTableItem>
                <StockTableItem>0918888888</StockTableItem>
                <StockTableItem>台北市 xx 區 xxx 路 xx 樓</StockTableItem>
                <StockTableItem>ekasdksjl@gmail.com</StockTableItem>
                <StockTableItem>前開衩扭結洋裝</StockTableItem>
                <StockTableItem>3</StockTableItem>
                <StockTableItem>NT$ 3000</StockTableItem>
              </StockTableItemGroup>
              <StockTableItemGroup>
                <StockTableItem>Sharon</StockTableItem>
                <StockTableItem>0918888888</StockTableItem>
                <StockTableItem>台北市 xx 區 xxx 路 xx 樓</StockTableItem>
                <StockTableItem>ekasdksjl@gmail.com</StockTableItem>
                <StockTableItem>前開衩扭結洋裝</StockTableItem>
                <StockTableItem>3</StockTableItem>
                <StockTableItem>NT$ 3000</StockTableItem>
              </StockTableItemGroup>
            </StockTableSection>
          </OrderSection>
        </StockTable>
        <StockTable>
          <OrderStatus>已完成訂單</OrderStatus>
          <OrderSection>
            <StockTableTitle>
              <StockTableTitleItem>會員名稱</StockTableTitleItem>
              <StockTableTitleItem>聯絡電話</StockTableTitleItem>
              <StockTableTitleItem>聯絡地址</StockTableTitleItem>
              <StockTableTitleItem>Email</StockTableTitleItem>
              <StockTableTitleItem>商品名稱</StockTableTitleItem>
              <StockTableTitleItem>商品數量</StockTableTitleItem>
              <StockTableTitleItem>總金額</StockTableTitleItem>
            </StockTableTitle>
            <StockTableSection>
              <StockTableItemGroup>
                <StockTableItem>Yumy</StockTableItem>
                <StockTableItem>0999999999</StockTableItem>
                <StockTableItem>台北市 xx 區 xxx 路 xx 樓</StockTableItem>
                <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                <StockTableItem>小扇紋質感上衣</StockTableItem>
                <StockTableItem>5</StockTableItem>
                <StockTableItem>NT$ 9000</StockTableItem>
              </StockTableItemGroup>
              <StockTableItemGroup>
                <StockTableItem>Yumy</StockTableItem>
                <StockTableItem>0999999999</StockTableItem>
                <StockTableItem>台北市 xx 區 xxx 路 xx 樓</StockTableItem>
                <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                <StockTableItem>小扇紋質感上衣</StockTableItem>
                <StockTableItem>5</StockTableItem>
                <StockTableItem>NT$ 9000</StockTableItem>
              </StockTableItemGroup>
              <StockTableItemGroup>
                <StockTableItem>Yumy</StockTableItem>
                <StockTableItem>0999999999</StockTableItem>
                <StockTableItem>台北市 xx 區 xxx 路 xx 樓</StockTableItem>
                <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                <StockTableItem>小扇紋質感上衣</StockTableItem>
                <StockTableItem>5</StockTableItem>
                <StockTableItem>NT$ 9000</StockTableItem>
              </StockTableItemGroup>
              <StockTableItemGroup>
                <StockTableItem>Yumy</StockTableItem>
                <StockTableItem>0999999999</StockTableItem>
                <StockTableItem>台北市 xx 區 xxx 路 xx 樓</StockTableItem>
                <StockTableItem>sdfkjlsdf@gmail.com</StockTableItem>
                <StockTableItem>小扇紋質感上衣</StockTableItem>
                <StockTableItem>5</StockTableItem>
                <StockTableItem>NT$ 9000</StockTableItem>
              </StockTableItemGroup>
            </StockTableSection>
          </OrderSection>
        </StockTable>
      </Container>
    </Wrapper>
  );
}

export default Stock;
