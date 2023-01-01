import { useEffect } from "react";
import { useGlobalContext } from "../hooks/context";

const Settings: React.FC = () => {
  const { navbar } = useGlobalContext();

  useEffect(() => {
    navbar?.current?.classList.toggle("is-hidden");
  }, []);
  
  return <h1>Settings</h1>;
};

export default Settings