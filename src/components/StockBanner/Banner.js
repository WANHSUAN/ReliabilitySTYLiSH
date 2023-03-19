import styled from 'styled-components';

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

export function Banner(props) {
  return (
    <StockTitleSection>
      <StockTitle>
        Hi, Sharon!
        <StockText>準備好管理您的訂單了嗎？</StockText>
      </StockTitle>
      <StockImage src={props.stock} />
    </StockTitleSection>
  );
}

export default Banner;
