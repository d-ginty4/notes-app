import { useEffect } from "react";
import { useGlobalContext } from "../hooks/context";

const Calendar: React.FC = () => {
  const { setPageName } = useGlobalContext();

  useEffect(() => {
    setPageName(window.location.pathname);
  }, [])
  
  return (
    <h1>
      Calendar
    </h1>
  );
};

export default Calendar