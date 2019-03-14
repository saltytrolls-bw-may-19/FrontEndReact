import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

//Styling
import './Hacker.scss';

//Component
class Chart extends React.Component {
  render() {
    //If positive sentiment (>0), create positive sentiment graph with green color
    if (this.props.sentiment >= 0) {
      const data = [{ name: 'Gray', value: 0.5 }, { name: 'Sentiment', value: this.props.sentiment / 2 }, { name: 'Gray', value: (1 - this.props.sentiment) / 2 }];
      const COLORS = ['#EAEAEA', '#259C32', '#EAEAEA'];

      return (
        <PieChart width={400} height={200}>
          <text x={130} y={120} textAnchor="middle" dominantBaseline="middle">
            Salty
          </text>
          <text x={200} y={60} textAnchor="middle" dominantBaseline="middle">
            Neutral
          </text>
          <text x={270} y={120} textAnchor="middle" dominantBaseline="middle">
            Sweet
          </text>
          <Pie dataKey="value" data={data} startAngle={180} endAngle={0} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={1}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
    }
    //If negative sentiment (<0), create negative sentiment graph with red color
    if (this.props.sentiment < 0) {
      const data = [{ name: 'Gray', value: (1 - this.props.sentiment) / 2 }, { name: 'Sentiment', value: this.props.sentiment / 2 }, { name: 'Gray', value: 0.5 }];
      const COLORS = ['#EAEAEA', '#FB3640', '#EAEAEA'];

      return (
        <PieChart width={800} height={400}>
          <Pie data={data} startAngle={180} endAngle={0} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={1}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
    }
    //If no data, return empty div
    return <div />;
  }
}
export default Chart;
