import React from "react";
import { useContext } from "react";
import MemoList from "./MemoList.jsx";
import MemoDetail from "./MemoDetail.jsx";
import styles from "./MemoContainer.module.css";
import { LoginAuthContext } from "./LoginAuthContext.jsx";

function MemoContainer({
  memos,
  selectedMemoId,
  onMemoClick,
  addMemo,
  updateMemo,
  deleteMemo,
}) {
  const { loginStatus } = useContext(LoginAuthContext);
  const selectedMemoObject = memos.find((memo) => memo.id === selectedMemoId);

  return (
    <div className={styles.container}>
      <div className={styles.memoList}>
        <h2>メモ一覧</h2>
        <MemoList memos={memos} onMemoClick={onMemoClick} />
        {loginStatus && <button onClick={addMemo}>+</button>}
      </div>
      <div className={styles.memoDetail}>
        <MemoDetail
          memo={selectedMemoObject}
          updateMemo={updateMemo}
          deleteMemo={deleteMemo}
        />
      </div>
    </div>
  );
}

export default MemoContainer;
