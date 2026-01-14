import styles from "./aboutme.module.scss";

export const Aboutme = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <ul className={styles.left}>
          <li>
            <p>名前</p>
            <p>みずのりゅうき</p>
          </li>
          <li>
            <p>出身</p>
            <p>静岡県浜松市</p>
          </li>
          <li>
            <p>生年月日</p>
            <p>2005.2.9</p>
          </li>
          <li>
            <p>学校</p>
            <p>愛知工業大学情報科学部情報化学科</p>
          </li>
          <li>
            <p>趣味</p>
            <p>バイク,読書,Twitter</p>
          </li>
        </ul>
        <div className={styles.right} />
      </div>
      <div className={styles.info}>
        <div className={styles.message}>
          <p>ひとこと</p>
          <div>
            Reactをはじめとしたフロントエンドの技術を勉強しています。
            ハッカソンに出場して作品を作りながら勉強中です。ユーザーが使いやすいデザインは何かを考えながら実装しようと心がけています。プログラミングに関係なく情報を蓄えるのが好きです。
          </div>
        </div>
      </div>
    </div>
  );
};
