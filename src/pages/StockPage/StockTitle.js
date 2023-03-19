import styled from 'styled-components/macro';

const StockTableTitleItem = styled.li`
  width: 300px;
`;

function stockTitle() {
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

export default stockTitle;
