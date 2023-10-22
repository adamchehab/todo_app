import "./App.css";

function MyComponent({ title, count }) {
  return (
    <>
      <div className="card">
        <div className="content">
          <div className="title">
            <div className="text">
              {title}
            </div>
            <div className="count">
              {count}
            </div>
          </div>
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
