import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

const MyComponent = ({ data, isLoading, error, fetchData }) => {
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
      {data && data.map((item) => <div key={item.id}>{item.name}</div>)}
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

export default connect(mapStateToProps, { fetchData })(MyComponent);
