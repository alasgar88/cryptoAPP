import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useSelector } from "react-redux";
import "./fusion-chart.scss";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const LineChart = () => {
  const { cryptoChartType } = useSelector((store) => store.balance);
  const { lightMode } = useSelector((store) => store.balance);
  const dataSource = {
    chart: {
      setadaptiveymin: "1",
      // label config
      showLabels: "0",
      showYAxisValues: "0",
      // colors
      theme: "fusion",
      lineThickness: "2",
      bgColor: `${lightMode ? "#E4EDF7" : "#4431A9"}`,
      // fonts
      //   baseFontSize: "0.5rem",
      baseFontColor: `${lightMode ? "#736CB7" : "#ffffff"}`,
      // plot gradiend
      usePlotGradientColor: "1",
      plotFillAngle: "90",
      plotFillAlpha: "45",
      showPlotBorder: "1",
      plotBorderThickness: "1",
      drawFullAreaBorder: "0",
      drawAnchors: false,
      lineColor: "#CAB234",
      showVLineLabelBorder: false,
    },
    data: [
      {
        label: "Jul 22",
        value: "89.45",
      },
      {
        label: "Jul 23",
        value: "89.87",
      },
      {
        label: "Jul 24",
        value: "89.64",
      },
      {
        label: "Jul 25",
        value: "90.13",
      },
      {
        label: "Jul 26",
        value: "90.67",
      },
      {
        label: "Jul 27",
        value: "90.54",
      },
      {
        label: "Jul 28",
        value: "90.75",
      },
      {
        label: "Jul 29",
        value: "90.8",
      },
      {
        label: "Jul 30",
        value: "91.16",
      },
      {
        label: "Jul 31",
        value: "91.37",
      },
      {
        label: "Jul 32",
        value: "91.66",
      },
      {
        label: "Jul 33",
        value: "91.8",
      },
    ],
  };

  const chartConfigs = {
    type: `${cryptoChartType}`,
    width: "115",
    height: "104",
    dataFormat: "JSON",
    dataSource,
  };
  return <ReactFC {...chartConfigs} className='fusionChart ' />;
};

export default LineChart;
