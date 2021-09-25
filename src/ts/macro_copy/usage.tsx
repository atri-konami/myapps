import React from "react";

const Usage: React.FC = () => (
  <div className="container-fluid p-5">
    <ol>
      <li>
        ゲーム内のチャット欄で流れたマクロを選択して<kbd>ctrl+c</kbd>
        でコピーする。
        <ul>
          <li>
            ユーザー名の部分が入りきっていると確実ですが、最悪最初の行は名前の右のカッコさえ入っていれば問題なく処理できます。
          </li>
          <li>つまりちょっと雑でもOK！</li>
        </ul>
      </li>
      <li>
        トップページの"Input"欄に「右クリック→貼り付け」もしくは
        <kbd>ctrl+v</kbd>で貼り付ける。
      </li>
      <li>
        必要に応じて変換ボタン上の各種設定を変更する。
        <ul>
          <li>
            前につける: 各行の前につける文字列です。デフォルトだと
            <code>/p</code>
            になっていますので、各行の先頭が書き換わり、パーティ向けのマクロが出力されます。
          </li>
          <li>
            後ろにつける: 各行の後ろにつける文字列です。デフォルトだと
            <code>&lt;se.9&gt;</code>
            になっていますので、各行の実行時にSEがなります。
          </li>
          <li>
            1マクロ毎の最大行数:
            出力が複数マクロ分になる際の、1マクロあたりの最大行数です。デフォルトでは15行(1マクロの限界)で出力するので、別途
            <code>/micon</code>
            などを設定する場合などはより少なく設定すると便利です。
          </li>
        </ul>
      </li>
      <li>
        変換ボタンを押す。
        <ul>
          <li>
            Inputの右側に出力されます。複数マクロに渡る場合はその分だけOutput欄が出力されます。
          </li>
          <li>
            右上の"Copy"ボタンを押すと自動でコピーされて、そのままゲーム内で
            <kbd>ctrl+v</kbd>で貼り付けが出来ます。
          </li>
        </ul>
      </li>
    </ol>
    <div>
      不具合報告等は<a href="https://twitter.com/attribute_k">Twitter</a>
      もしくは質問箱(↑のリンクから)で受け付けています。Twitterの方が応答率は高いです。匿名希望の方は質問箱からどうぞ。
    </div>
  </div>
);

export default Usage;
