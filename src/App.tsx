import "./App.css";

function MyComponent({ title, count }) {
  return (
    <>
      <div className="card">
        <div className="container">
          <div className="title">
            <span className="text">
              {title}
            </span>
            <span className="count">
              {count}
            </span>
          </div>
          <div>All</div>
        </div>
      </div>
    </>
  );
}

export default function TaskListApp() {
  return (
    <>
      <MyComponent title="Товар 1" count={1} />
      <MyComponent title="Товар второй" count={3} />
      <MyComponent title="Долгое оп. товара" count={3} />
    </>
  );
}
