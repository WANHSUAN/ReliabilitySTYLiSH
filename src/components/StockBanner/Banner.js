import styled from 'styled-components/macro';

const StockTitleSection = styled.div`
  background-color: #f5eef8;
  border-radius: 10px;
  height: 200px;
  position: relative;
  margin-top: 100px;
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
        <StockText>歡迎來到STYLiSH報表總覽</StockText>
      </StockTitle>
      <StockImage src={props.stock} />
    </StockTitleSection>
  );
}
