import React from "react";

const LoadingErrorEmptyState = ({
  isLoading,
  error,
  data,
  loadingMessage = "Loading...",
  errorMessage = "Error fetching data",
  emptyMessage = "No data available",
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-gray-500">{loadingMessage}</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-500">{errorMessage}</p>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }
  return <></>; 
};

export default LoadingErrorEmptyState;
