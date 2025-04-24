// App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import MemoContainer from "./MemoContainer.jsx";

function App() {
  const [memos, setMemos] = useState(() => {
    const storedMemos = localStorage.getItem("memos");
    return storedMemos ? JSON.parse(storedMemos) : [];
  });

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const [selectedMemoId, setSelectedMemoId] = useState(null);
  const [newMemo, setNewMemo] = useState("");

  function addMemo() {
    const newMemo = {
      id: self.crypto.randomUUID(),
      content: "新規メモ",
    };
    setMemos([...memos, newMemo]);
    setSelectedMemoId(newMemo.id);
  }

  function handleMemoClick(id) {
    setSelectedMemoId(id);
  }

  return (
    <div>
      <h1>メモアプリ</h1>
      <MemoContainer
        memos={memos}
        selectedMemoId={selectedMemoId}
        onMemoClick={handleMemoClick}
        addMemo={addMemo}
      />
    </div>
  );
}

export default App;
