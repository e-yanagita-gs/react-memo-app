import React from "react";

function MemoDetail({ memo }) {
  if (!memo) {
    return <div>メモを選択してください</div>;
  }

  return (
    <div>
      <textarea
        value={memo.content}
        readOnly
        //style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
}

export default MemoDetail;
