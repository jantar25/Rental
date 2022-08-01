import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey } :any) {

  return (
    <div className="m-4 p-4 rounded-lg w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl my-4 text-[#002853] font-[900]">{title}</h1>
      <ResponsiveContainer width="90%" aspect={4 / 1}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Bar barSize={30} dataKey={dataKey} fill="orange" />
          <Tooltip />
          <CartesianGrid stroke="#002853" strokeDasharray="2 2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}