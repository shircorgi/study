// import "./Viewer.css";

const Viewer = ({ count }) => {
  return (
    <div className="Viewer">
      <div>
        <h4>현재 카운트</h4>
      </div>
      <h1> {count} </h1>
    </div>
  );
};

export default Viewer;
