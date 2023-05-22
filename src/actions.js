export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest()); // Dispatch a loading action

    // Perform asynchronous operation (e.g., API call)
    fetch("https://6461c1c2491f9402f4aa0565.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(fetchDataSuccess(data)); // Dispatch a success action with the fetched data
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error)); // Dispatch a failure action with the error
      });
  };
};

export const fetchDataRequest = () => {
  return {
    type: "FETCH_DATA_REQUEST",
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error,
  };
};
