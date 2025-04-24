import React from "react";
import MemoList from "./MemoList.jsx";
import MemoDetail from "./MemoDetail.jsx";
import styles from "./MemoContainer.module.css";

function MemoContainer({ memos, selectedMemoId, onMemoClick }) {
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);

  return (
    <div className={styles.container}>
      <div className={styles.memoList}>
        <h2>メモ一覧</h2>
        <MemoList memos={memos} onMemoClick={onMemoClick} />
      </div>
      <div className={styles.memoDetail}>
        <h2>メモ詳細</h2>
        <MemoDetail memo={selectedMemo} />
      </div>
    </div>
  );
}

export default MemoContainer;
