import { useState, useEffect } from "react";
import { useAuth } from "./hooks/useAuth.jsx";

function MemoDetail({ memo, updateMemo, deleteMemo }) {
  const { loginStatus } = useAuth();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (memo) {
      setContent(memo.content);
    } else {
      setContent("");
    }
  }, [memo]);

  return (
    <div>
      <h2>メモ詳細</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      {loginStatus && (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              updateMemo(memo.id, content);
            }}
          >
            更新
          </button>
          <button
            onClick={() => {
              deleteMemo(memo.id);
            }}
          >
            削除
          </button>
        </div>
      )}
    </div>
  );
}

export default MemoDetail;
