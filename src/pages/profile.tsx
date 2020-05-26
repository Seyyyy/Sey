import React from 'react'
import Subtitle from '../components/Subtitle'
import styles from './Profile.module.css'

const Profile = () => {
    return(
        <React.Fragment>
            <div className={styles.details}>
                <Subtitle text={'Details'}/>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>名前</td><td>Sey</td>
                        </tr>
                        <tr>
                            <td>趣味</td>
                            <td>イラスト<br />
                            Webアプリケーション開発<br />
                            Webデザイン
                            </td>
                        </tr>
                        <tr>
                            <td>ゲーム</td><td>アトリエシリーズ</td>
                        </tr>
                        <tr>
                            <td>アニメ</td>
                            <td>
                                ガルパン<br />
                                キルラキル<br />
                            </td>
                        </tr>
                        <tr>
                            <td>言語</td>
                            <td>
                                Python<br />
                                TypeScript
                            </td>
                        </tr>
                        <tr>
                            <td>FW</td>
                            <td>
                                Reactjs<br />
                                Nextjs<br />
                                Flask
                            </td>
                        </tr>
                        <tr>
                            <td>専攻</td><td>HCI</td>
                        </tr>
                        <tr>
                            <td>服</td>
                            <td>
                                Lui's<br />
                                yohji yamamoto<br />
                                CDG<br />
                                CHANEL
                            </td>
                        </tr>
                        <tr>
                            <td>食(好)</td>
                            <td>
                                ラーメン<br />
                                焼き肉<br />
                                寿司<br />
                                カレー
                            </td>
                        </tr>
                        <tr>
                            <td>食(嫌)</td>
                            <td>
                                漬物
                            </td>
                        </tr>
                        <tr>
                            <td>これから</td>
                            <td>
                                色彩調和<br />
                                チームリーディング<br />
                                Webバックエンド
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Profile