import { useEffect } from "react";
import { useGlobalContext } from "../hooks/context";

const Error = () => {
  const {navbar} = useGlobalContext()

  useEffect(() => {
    if (!navbar?.current?.classList.contains("is-hidden")){
      navbar?.current?.classList.add("is-hidden")
    }
  }, [])
  
  return (
    <center>
      <br />
      <br />
      <h1>404 - Page not found!</h1>
      <p>
        Oops! It seems like you're lost, let me help you find your way back
        home!
        <br />
        The following problems could be the case:
        <br />
        • The link is broken
        <br />
        • This page never existed
        <br />
        • This page has been removed
        <br />
        <br />
      </p>
      <h3>
        <a href="/">Click here to go back home</a>
      </h3>
      <br />
    </center>
  );
};

export default Error;
