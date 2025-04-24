// App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import MemoContainer from "./MemoContainer.jsx";

function App() {
  const [memos, setMemos] = useState(() => {
    const storedMemos = localStorage.getItem("memos");
    return storedMemos ? JSON.parse(storedMemos) : [];
  });

  const [selectedMemoId, setSelectedMemoId] = useState(null); // State の名前も変更

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const handleMemoClick = (id) => {
    setSelectedMemoId(id);
  };

  return (
    <div>
      <h1>メモアプリ</h1>
      <MemoContainer
        memos={memos}
        selectedMemoId={selectedMemoId}
        onMemoClick={handleMemoClick}
      />
    </div>
  );
}

export default App;
