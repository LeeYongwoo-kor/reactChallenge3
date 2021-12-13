import styled from "styled-components";

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  data: IPriceData;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const CoinInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin: 25px 0px;
`;

const CoinInfo = styled.div<{ isDown?: boolean; price?: number }>`
  font-weight: ${(props) => props.price || 400};
  padding: 10px 0px;
  :nth-child(odd) {
    font-size: 15px;
    color: ${(props) => props.theme.accentColor};
  }
  > span:first-child {
    display: ${(props) => (props.isDown ? "inline-block" : "none")};
  }
  > span:nth-child(2) {
    display: ${(props) => (props.isDown ? "none" : "inline-block")};
  }
  > span:nth-child(3) {
    color: ${(props) => (props.isDown ? "#ff4848" : "#3cff00")};
  }
`;

function Price({ data }: PriceProps) {
  return (
    <Container>
      <CoinInfoBox>
        <CoinInfo>PRICE</CoinInfo>
        <CoinInfo price={600}>$ {data?.quotes.USD.price.toFixed(4)}</CoinInfo>
        <CoinInfo>1H</CoinInfo>
        <CoinInfo isDown={data?.quotes.USD.percent_change_1h < 0}>
          <span>🔻</span>
          <span>💹</span>
          <span>{data?.quotes.USD.percent_change_1h}%</span>
        </CoinInfo>
        <CoinInfo>24H</CoinInfo>
        <CoinInfo isDown={data?.quotes.USD.percent_change_24h < 0}>
          <span>🔻</span>
          <span>💹</span>
          <span>{data?.quotes.USD.percent_change_24h}%</span>
        </CoinInfo>
        <CoinInfo>7D</CoinInfo>
        <CoinInfo isDown={data?.quotes.USD.percent_change_7d < 0}>
          <span>🔻</span>
          <span>💹</span>
          <span> {data?.quotes.USD.percent_change_7d}%</span>
        </CoinInfo>
        <CoinInfo>30D</CoinInfo>
        <CoinInfo isDown={data?.quotes.USD.percent_change_30d < 0}>
          <span>🔻</span>
          <span>💹</span>
          <span>{data?.quotes.USD.percent_change_30d}%</span>
        </CoinInfo>
        <CoinInfo>ATH</CoinInfo>
        <CoinInfo>$ {data?.quotes.USD.ath_price.toFixed(4)}</CoinInfo>
        <CoinInfo>MarketCap</CoinInfo>
        <CoinInfo>$ {data?.quotes.USD.market_cap}</CoinInfo>
      </CoinInfoBox>
    </Container>
  );
}

export default Price;
