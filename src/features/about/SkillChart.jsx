import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

/*
const skillData = [
  { name: "JavaScript", value: 400, level: "good" },
  { name: "HTML&CSS", value: 300, level: "good" },
  { name: "React", value: 300, level: "good" },
  { name: "Java", value: 200, level: "good" },
];
*/

const laSkills = [
  { name: "Adobe Suite", value: 80 },
  { name: "AutoCAD", value: 50 },
  { name: "SketchUp", value: 30 },
  { name: "Lumion", value: 30 },
  { name: "Rhino", value: 10 },
  { name: "Processing", value: 10 },
  { name: "Figma", value: 10 },
  { name: "Procreate", value: 20 },
];
const codingSkills = [
  { name: "JavaScript", value: 60 },
  // { name: "TypeScript", value: 30 },
  // { name: "Node.js", value: 30 },
  { name: "Java", value: 40 },
  { name: "Python", value: 20 },
  { name: "HTML&CSS", value: 60 },
  { name: "React", value: 80 },
  // { name: "Git", value: 20 },
  // { name: "Express", value: 20 },
  // { name: "MongoD", value: 20 },
  // { name: "MySQL", value: 20 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-[10px]"
    >
      {`${name}`}
    </text>
  );
};

export default function SkillChart() {
  const { isDarkMode } = useDarkMode();

  const fillColor = isDarkMode ? "rgb(17 24 39 / 0.8)" : "rgb(56 102 65 / 0.8)";

  return (
    <ResponsiveContainer
      aspect={1}
      width="80%"
      className="hidden items-center justify-center lg:flex lg:flex-col"
    >
      <PieChart width={400} height={400}>
        <Pie
          data={laSkills}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill={fillColor}
          labelLine={false}
          label={renderCustomizedLabel}
        />
        <Pie
          data={codingSkills}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={120}
          fill="rgb(185 28 28)"
          label={(entry) => entry.name}
          className="text-[6px] md:text-[11px] lg:text-[14px]"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

/*
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
 */
