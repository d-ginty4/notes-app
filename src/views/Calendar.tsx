import { useEffect } from "react";
import { useGlobalContext } from "../hooks/context";

const Calendar: React.FC = () => {
  const {setPage} = useGlobalContext()

  useEffect(() => {
    setPage(window.location.pathname);
  }, [])
  
  return (
    <h1>
      Calendar
    </h1>
  );
};

export default Calendar