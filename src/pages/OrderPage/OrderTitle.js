import styled from 'styled-components/macro';

const StockTableTitleItem = styled.li`
  width: 300px;
  line-height: 20px;
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

function OrderTitle() {
  return (
    <StockTableTitle>
      <StockTableTitleItem>訂單編號</StockTableTitleItem>
      <StockTableTitleItem>會員名稱</StockTableTitleItem>
      <StockTableTitleItem>聯絡電話 / 地址</StockTableTitleItem>
      <StockTableTitleItem>Email</StockTableTitleItem>
      <StockTableTitleItem>商品內容</StockTableTitleItem>
      <StockTableTitleItem>總金額</StockTableTitleItem>
      <StockTableTitleItem>訂單狀態</StockTableTitleItem>
    </StockTableTitle>
  );
}

export default OrderTitle;
