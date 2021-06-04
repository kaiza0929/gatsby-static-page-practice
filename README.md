sudo sysctl fs.inotify.max_user_watches=400000<br>
gatsby develop<br>
https://dreamy-meitner-7bc962.netlify.app/<br>
stateを使用しなければコンポーネントにコンストラクタは不要(なくてもpropsは使える)<br>
関数コンポーネントの引数({ 変数 })はpropsの値<br>
=>クラスコンポーネントでは同じ値をthis.props.変数で取得できる<br>
makeStyles()やuseStaticQuery()など関数コンポーネントでしか使えないメソッドあり<br>
=>前者はwithStyle()後者はStaticQueryコンポーネントで代用<br>
cssのクラス名に空白が含まれている => 2つのクラスが付与されているという意味<br>
class="card mb-3" => .card.mb-3 {}という書き方をする<br>
gatsby buildしないとgithub pagesで見れない<br><br>
Atomic Components.. Atomic Designをコンポーネントアプリ向けに改良したデザイン設計手法<br><br>
atoms.. これ以上分解できないUI要素 ボタンやパラグラフなど divタグは分からん<br>
molecules.. atomsの集合 入力フォームなど(入力内容を説明するテキストボックスのラベル + テキストボックス + 送信ボタン)<br>
organisms.. atomsとmoleculesの集合<br>
ecosystems.. よく分からない reduxやapiのコール？ 今の所作っておらずenvironmentsに前述の三要素を貼っている状態<br>
environments.. それぞれのページ Home, About,..<br><br>

関数コンポーネントの引数はpropsを分割代入で受け取る<br>
```Parent.jsx
<div>
    <Button text="押せ!">
</div>
```
```Child.jsx
var Button = ({ text }) => {
    return (
        <button>{text}</button>
    );
}
```