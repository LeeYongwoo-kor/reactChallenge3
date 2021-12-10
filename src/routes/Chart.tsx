import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data: chartData } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData?.reduce(
                (thisArray: Array<{}>, currData: IHistorical) => {
                  return [
                    ...thisArray,
                    {
                      x: currData?.time_open,
                      y: [
                        Math.round((currData?.open + Number.EPSILON) * 100) /
                          100,
                        Math.round((currData?.high + Number.EPSILON) * 100) /
                          100,
                        Math.round((currData?.low + Number.EPSILON) * 100) /
                          100,
                        Math.round((currData?.close + Number.EPSILON) * 100) /
                          100,
                      ],
                    },
                  ];
                },
                []
              ),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transpert",
            },
            grid: {
              show: true,
            },
            title: {
              text: coinId,
              align: "left",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
              labels: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
