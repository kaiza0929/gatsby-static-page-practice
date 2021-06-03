sudo sysctl fs.inotify.max_user_watches=400000<br>
gatsby develop<br>
stateを使用しなければコンポーネントにコンストラクタは不要(なくてもpropsは使える)<br>
関数コンポーネントの引数({ 変数 })はpropsの値<br>
=>クラスコンポーネントでは同じ値をthis.props.変数で取得できる<br>
makeStyles()やuseStaticQuery()など関数コンポーネントでしか使えないメソッドあり<br>
=>前者はwithStyle()後者はStaticQueryコンポーネントで代用<br>