import React from "react";

function MemoList({ memos, onMemoClick }) {
  return (
    <ul>
      {memos.map((memo) => {
        const title = memo.content.split("\n")[0];
        return (
          <li key={memo.id} onClick={() => onMemoClick(memo.id)}>
            {title}
          </li>
        );
      })}
    </ul>
  );
}

export default MemoList;
