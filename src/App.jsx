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

  function handleMemoClick(id) {
    setSelectedMemoId(id);
  }

  function addMemo() {
    const newMemo = {
      id: self.crypto.randomUUID(),
      content: "新規メモ",
    };
    setMemos([...memos, newMemo]);
    setSelectedMemoId(newMemo.id);
  }

  function updateMemo(id, content) {
    const updatedMemos = memos.map((memo) =>
      memo.id === id ? { ...memo, content } : memo
    );
    setMemos(updatedMemos);
  }

  function deleteMemo(id) {
    const deleteMemo = memos.filter((memo) => memo.id !== id);
    setMemos(deleteMemo);
    setSelectedMemoId(null);
  }

  return (
    <div>
      <h1>メモアプリ</h1>
      <MemoContainer
        memos={memos}
        selectedMemoId={selectedMemoId}
        onMemoClick={handleMemoClick}
        addMemo={addMemo}
        updateMemo={updateMemo}
        deleteMemo={deleteMemo}
      />
    </div>
  );
}

export default App;
