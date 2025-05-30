import "./App.css";
import MemoContainer from "./MemoContainer.jsx";
import { LoginAuthProvider } from "./LoginAuthProvider.jsx";
import LoginButton from "./LoginButton.jsx";

function App() {
  return (
    <LoginAuthProvider>
      <div className="header">
        <h1>メモアプリ</h1>
        <LoginButton />
      </div>
      <MemoContainer
        memos={memos}
        selectedMemoId={selectedMemoId}
        onMemoClick={handleMemoClick}
        addMemo={addMemo}
        updateMemo={updateMemo}
        deleteMemo={deleteMemo}
      />
    </LoginAuthProvider>
  );
}

export default App;
