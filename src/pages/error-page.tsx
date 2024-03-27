import { useRouteError } from "react-router-dom";

import { Button, Title } from "@/components";

import "../styles/error/error.css";

interface RouteError {
  message: string;
  stack?: string;
  statusText?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  const handleRefresh = () => window.location.href = "/"

  return (
    <div id="error-page">
      <Title title="Oops!!" className="error-title" />

      <p className="error-content">Sorry, an unexpected error has occurred.</p>
      <p className="error-content">
        The page your search is <i>{error.statusText ?? error.message}</i>
      </p>
      <Button onClick={handleRefresh} className="error-btn">Refresh</Button>
    </div>
  );
}
