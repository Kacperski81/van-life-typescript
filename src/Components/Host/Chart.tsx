import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Transaction } from "../../types";

type ChartProps = {
  data: Transaction[];
};

export default class Chart extends PureComponent<ChartProps> {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar 
            dataKey="luxury"
            fill="#161616"
            stackId="a"
          />
          <Bar 
            dataKey="rugged"
            fill="#115e59"
            stackId="a"
          />
          <Bar
            dataKey="simple"
            fill="#E17654"
            stackId="a"
            />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
