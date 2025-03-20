import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "10 AM", attacks: 5 },
  { name: "11 AM", attacks: 12 },
  { name: "12 PM", attacks: 8 },
  { name: "1 PM", attacks: 15 },
];

export default function AttackTrends() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Attack Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="attacks" stroke="#FF0000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
