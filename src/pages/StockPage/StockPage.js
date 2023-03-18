import styled from 'styled-components/macro';
import stock from './stock.png';

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: calc(100vh - 115px);
  margin: 0 auto 100px;
`;

const StockTitleSection = styled.div`
  background-color: #f5eef8;
  border-radius: 10px;
  height: 200px;
  position: relative;
`;

const StockImage = styled.img`
  width: 550px;
  height: 350px;
  position: absolute;
  top: -53%;
  right: -3%;
`;

const StockTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  padding: 70px;
  margin-top: 100px;
`;

const StockText = styled.p`
  font-size: 20px;
  padding-top: 20px;
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
`;

function Stock() {
  return (
    <Wrapper>
      <StockTitleSection>
        <StockTitle>
          Hi, Sharon!
          <StockText>準備好管理您的訂單了嗎？</StockText>
        </StockTitle>

        <StockImage src={stock} />
      </StockTitleSection>

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
    </Wrapper>
  );
}

export default Stock;
