import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";

const App = ({ data, isLoading, error, fetchData }) => {
  useEffect(() => {
    fetchData(); // Dispatch the fetchData action when the component mounts
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {console.log(data)}
      {data &&
        data.map((item) => {
          return (
            <div>
              <div key={item.id}>{item.title}</div>;<div>{item.price}</div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
