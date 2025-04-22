import React from "react";
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div className="error-page flex flex-col items-center justify-center gap-3 h-screen bg-gray-800">
        <span className="text-gray-400 text-2xl">{error?.status}</span>
        <h5 className="text-gray-100 text-2xl">Oops! Something Went Wrong!</h5>
        <p className="my-3 text-gray-400">
          Sorry, an unexpected error has occurred.
        </p>
      </div>
    </>
  );
}
