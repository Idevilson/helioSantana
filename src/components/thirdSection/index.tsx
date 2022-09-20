import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'

export function ThirdSection() {

    return(
        <>
            <div className={styles.container} id="posicionamento">
                <div className={styles.centerContainer}>
                    <div className={styles.headerContent}>
                        <h1>
                            posicionamentos
                        </h1>
                    </div>

                    <div className={styles.bodyVideoContainer}>
                        <ReactPlayer url='https://youtu.be/1L3kYOpQGnA' />
                    </div>

                    <div className={styles.footer}>
                            <div className={styles.card}>
                                <Image
                                    src="/assets/thirdSection/1.png"
                                    alt="Primeiro Ícone"
                                    width={94}
                                    height={94}
                                    quality={100}
                                />

                                <div className={styles.textBox}>
                                    <h2 className={styles.text}>
                                        REPRESENTANTE <br />
                                        DA JUVENTUDE
                                    </h2>
                                </div>
                            </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/2.png"
                                alt="Segundo Ícone"
                                width={94}
                                height={94}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    ajudarei instituições de <br />
                                    caridade e os menos favorecidos <br />
                                    doando meu salário

                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/3.png"
                                alt="terceiro ícone"
                                width={94}
                                height={94}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Não quero ganhar <br />
                                    dinheiro com política <br />
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/4.png"
                                alt="quarto ícone"
                                width={94}
                                height={94}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Trabalharei com o <br />
                                    povo e para o povo

                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerMobile} id="posicionamento">
                <div className={styles.centerContainerMobile}>
                    <div className={styles.headerContentMobile}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainerMobile}>
                        <ReactPlayer
                            width={977}
                            height={550}
                            style={{
                                marginLeft: 100
                            }}
                            url='https://youtu.be/1L3kYOpQGnA'
                        />
                    </div>

                    <div className={styles.footerMobile}>
                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/1Mobile.png"
                                    alt="Primeiro ícone"
                                    width={230}
                                    height={230}
                                    objectFit='contain'
                                    quality={100}
                                />
                            </div>


                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Qualquer tipo de auxílio <br />
                                    de deputado eu devolverei <br />
                                    a população
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/2Mobile.png"
                                    alt="segundo icone"
                                    width={230}
                                    height={230}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    ajudarei instituições de <br />
                                    caridade e os menos <br />
                                    favorecidos doando meu salário
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/3Mobile.png"
                                    alt="terceiro ícone"
                                    width={230}
                                    height={230}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Não quero ganhar <br />
                                    dinheiro com política
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/4Mobile.png"
                                    alt="terceiro ícone"
                                    width={230}
                                    height={230}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Trabalharei com o <br />
                                    povo e para o povo
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}