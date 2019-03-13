import React from "react";
import { PieChart, Pie, Cell } from "recharts";

class Chart extends React.Component {
  render() {
    if (this.props.sentiment >= 0) {
      const data = [
        { name: "Gray", value: 0.5 },
        { name: "Sentiment", value: this.props.sentiment / 2 },
        { name: "Gray", value: (1 - this.props.sentiment) / 2 }
      ];
      const COLORS = ["#EAEAEA", "green", "#EAEAEA"];
      return (
        <PieChart width={400} height={200} onMouseEnter={this.onPieEnter}>
          <text x={145} y={120} textAnchor="middle" dominantBaseline="middle">
            Salty
          </text>
          <text x={270} y={120} textAnchor="middle" dominantBaseline="middle">
            Sweet
          </text>
          <Pie
            dataKey="value"
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={1}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
    }
    if (this.props.sentiment < 0) {
      const data = [
        { name: "Gray", value: (1 - this.props.sentiment) / 2 },
        { name: "Sentiment", value: this.props.sentiment / 2 },
        { name: "Gray", value: 0.5 }
      ];
      const COLORS = ["#EAEAEA", "red", "#EAEAEA"];
      return (
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={1}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
    }
    return <div />;
  }
}
export default Chart;