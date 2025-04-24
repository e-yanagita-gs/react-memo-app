// App.jsx
import { useState } from "react";
import "./App.css";
import MemoContainer from "./MemoContainer.jsx";

function App() {
  const [memos, setMemos] = useState([
    { id: 1, content: "内容1\nこれは1行目です。" },
    { id: 2, content: "内容2\nこれも1行目です。" },
  ]);
  const [selectedMemoId, setSelectedMemoId] = useState(null); // State の名前も変更

  const handleMemoClick = (id) => {
    setSelectedMemoId(id);
  };

  return (
    <div>
      <h1>メモアプリ</h1>
      <MemoContainer
        memos={memos}
        selectedMemoId={selectedMemoId} // props の名前を修正
        onMemoClick={handleMemoClick}
      />
    </div>
  );
}

export default App;
