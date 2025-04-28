import React from "react";
import { NavLink, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div className="error-page flex flex-col items-center justify-center gap-3 h-screen bg-gray-50">
          <img
            src="/assets/images/404_page.svg"
            alt="Error 404"
            className="w-96 object-cover"
          />
        <p className="text-gray-500">
          Sorry, an unexpected error has occurred.
        </p>
        <NavLink to="/" className="text-blue-500 hover:underline border-[.01rem] p-2 rounded border-blue-500">
          Go back to Home
        </NavLink>
      </div>
    </>
  );
}
