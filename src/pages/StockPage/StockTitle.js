import styled from 'styled-components/macro';

const StockTableTitleItem = styled.li`
  width: 300px;
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

function StockTitle() {
  return (
    <StockTableTitle>
      <StockTableTitleItem>會員名稱</StockTableTitleItem>
      <StockTableTitleItem>聯絡電話</StockTableTitleItem>
      <StockTableTitleItem>聯絡地址</StockTableTitleItem>
      <StockTableTitleItem>Email</StockTableTitleItem>
      <StockTableTitleItem>商品名稱</StockTableTitleItem>
      <StockTableTitleItem>商品數量</StockTableTitleItem>
      <StockTableTitleItem>總金額</StockTableTitleItem>
    </StockTableTitle>
  );
}

export default StockTitle;
