import "./app-info.css";

export default function AppInfo({
  dataLingth,
  dataFavourt,
}: {
  dataLingth: number;
  dataFavourt: number;
}) {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni: {dataLingth}</p>
      <p className="fs-4 text-uppercase">
        Ko'rilgan kinolar soni: {dataFavourt || 0}
      </p>
    </div>
  );
}
