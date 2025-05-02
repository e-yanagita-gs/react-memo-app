import React, { useState, useEffect } from "react";
import MemoList from "./MemoList.jsx";
import MemoDetail from "./MemoDetail.jsx";
import styles from "./MemoContainer.module.css";

function MemoContainer() {
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
      memo.id === id ? { ...memo, content } : memo,
    );
    setMemos(updatedMemos);
  }

  function deleteMemo(id) {
    const updatedMemo = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemo);
    setSelectedMemoId(null);
  }

  const selectedMemoObject = memos.find((memo) => memo.id === selectedMemoId);

  return (
    <div className={styles.container}>
      <div className={styles.memoList}>
        <h2>メモ一覧</h2>
        <MemoList memos={memos} onMemoClick={handleMemoClick} />
        <button onClick={addMemo}>+</button>
      </div>
      <div className={styles.memoDetail}>
        {selectedMemoId && (
          <MemoDetail
            key={selectedMemoId}
            memo={selectedMemoObject}
            updateMemo={updateMemo}
            deleteMemo={deleteMemo}
          />
        )}
      </div>
    </div>
  );
}

export default MemoContainer;
