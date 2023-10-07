import React from 'react'
import styles from './Style.module.scss'

const Content = () => {
    let data = [
        { Tittle: "Tittle", Summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus quaerat aliquam rem doloremque adipisci, tenetur vero accusamus repudiandae, neque rerum unde possimus deleniti a sint porro? Ad, possimus ex" },
        { Tittle: "Tittle", Summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus quaerat aliquam rem doloremque adipisci, tenetur vero accusamus repudiandae, neque rerum unde possimus deleniti a sint porro? Ad, possimus ex" },
        { Tittle: "Tittle", Summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus quaerat aliquam rem doloremque adipisci, tenetur vero accusamus repudiandae, neque rerum unde possimus deleniti a sint porro? Ad, possimus ex" },
        { Tittle: "Tittle", Summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus quaerat aliquam rem doloremque adipisci, tenetur vero accusamus repudiandae, neque rerum unde possimus deleniti a sint porro? Ad, possimus ex" },
        { Tittle: "Tittle", Summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus quaerat aliquam rem doloremque adipisci, tenetur vero accusamus repudiandae, neque rerum unde possimus deleniti a sint porro? Ad, possimus ex" },
        { Tittle: "Tittle", Summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus quaerat aliquam rem doloremque adipisci, tenetur vero accusamus repudiandae, neque rerum unde possimus deleniti a sint porro? Ad, possimus ex" }
    ]
    return (
        <div className={styles.content_container}>
            <div className={styles.card_wrap}>
                {
                    data.map((item) => {
                        return (
                            <div className={styles.card} >
                                <h1>{item.Tittle}</h1>
                                <p>{item.Summary}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default Content