import { useRouteError } from "react-router"

export const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Oops!!!!</h1>
        <h2>Something went wrong.</h2>
    </div>
  )
}
