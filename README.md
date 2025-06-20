# メモアプリ

このプロジェクトは、Reactで作成されたシンプルなメモアプリケーションです。ローカルストレージを使用してメモを保存し、基本的な追加、編集、削除機能を提供します。

## 主な機能

- メモの作成: 新しいメモを簡単に追加できます。
- メモの一覧表示: 作成したメモが一覧で表示されます。
- メモの選択: 一覧からメモを選択すると、詳細が表示されます。
- メモの編集: 選択したメモの内容を編集し、保存できます。
- メモの削除: 不要になったメモを削除できます。
- ローカルストレージへの保存: 作成・編集・削除したメモはブラウザのローカルストレージに保存されるため、ページを閉じてもデータが保持されます。

## 技術スタック

- React

## 起動方法

1.  **プロジェクトをクローンします。**

    ```bash
    git clone https://github.com/e-yanagita-gs/react-memo-app
    cd react-memo-app
    ```

2.  **依存関係をインストールします。**

    ```bash
    npm install
    # または
    yarn install
    ```

3.  **開発サーバーを起動します。**

    ```bash
    npm start
    # または
    yarn start
    ```

    ブラウザで `http://localhost:3000` にアクセスすると、アプリケーションが起動します。

## ファイル構成

```
├── public/
│   └── ...
├── src/
│   ├── App.css             # アプリケーション全体のスタイル
│   ├── App.jsx             # メインのアプリケーションコンポーネント
│   ├── MemoContainer.jsx   # メモ一覧と詳細表示のコンテナコンポーネント
│   ├── MemoDetail.jsx      # メモの詳細表示と編集コンポーネント
│   ├── MemoList.jsx        # メモの一覧表示コンポーネント
│   └── index.js            # アプリケーションのエントリーポイント
├── package.json
├── README.md             # このファイル
└── ...
```

## 使用方法

1.  アプリケーションを起動すると、画面左側に「メモ一覧」が表示されます。
2.  新しいメモを追加するには、「メモ一覧」の下にある「+」ボタンをクリックします。新しいメモが作成され、右側の詳細エリアに表示されます。
3.  メモの内容を編集するには、詳細エリアのテキストエリアに入力し、下部の「更新」ボタンをクリックします。
4.  メモを削除するには、詳細エリアの下部にある「削除」ボタンをクリックします。
5.  一覧表示されたメモをクリックすると、そのメモの詳細が右側の詳細エリアに表示されます。
