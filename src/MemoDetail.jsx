import { useState, useEffect } from "react";

function MemoDetail({ memo, updateMemo, deleteMemo }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (memo) {
      setContent(memo.content);
    } else {
      setContent("");
    }
  }, [memo]);

  if (!memo) {
    return <div>メモを選択してください</div>;
  }

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
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
    </div>
  );
}

export default MemoDetail;
