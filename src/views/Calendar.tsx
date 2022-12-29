import { useEffect } from "react";
import { useGlobalContext } from "../hooks/context";

const Calendar: React.FC = () => {
  const { setPagePath } = useGlobalContext();

  useEffect(() => {
    setPagePath(window.location.pathname);
  }, [])
  
  return (
    <h1>
      Calendar
    </h1>
  );
};

export default Calendar