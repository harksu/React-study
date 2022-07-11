import { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

function App() {
  const [data, setData] = useState(null);
  const dataUrl = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=63a64895209249d58ed818090188daba`;
  const onClick = async () => {
    try {
      const response = await axios.get(dataUrl);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return <NewsList />;
}

export default App;
