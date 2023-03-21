import styled from 'styled-components/macro';

const StockTitleSection = styled.div`
  background-color: ${(props) => props.backgroundColor};
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
`;

const StockText = styled.p`
  font-size: 20px;
  padding-top: 20px;
`;

export function Banner(props) {
  return (
    <StockTitleSection backgroundColor={props.backgroundColor}>
      <StockTitle>
        Hi, {props.title}!<StockText>{props.message}</StockText>
      </StockTitle>
      <StockImage src={props.stock} />
    </StockTitleSection>
  );
}
