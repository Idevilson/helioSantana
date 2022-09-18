import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import {Header} from "../header";


export function FirstSection(){

    return(
            <div className={styles.Container}>
                <Header />

                <div className={styles.candidatePhoto}>
                    <Image
                        src="/assets/firstSection/HelioSantana.png"
                        alt="Imagem do candidato HelioSantana"
                        quality={100}
                        layout="fill"
                    />
                </div>
                <div className={styles.retangleEffectFirstSection} />
                <div className={styles.slogan}>
                    <Image
                        src="/assets/firstSection/slogan.png"
                        alt="Slogan"
                        width={368}
                        height={134}
                        quality={100}
                    />
                </div>


                <div className={styles.candidateName}>
                    <Image
                        src="/assets/firstSection/HelioName.png"
                        alt="Slogan"
                        layout="fill"
                        quality={100}
                    />
                </div>

                <div className={styles.candidateNumber}>
                    <Image
                        src="/assets/firstSection/number.svg"
                        alt="Slogan"
                        layout="fill"
                        quality={100}
                    />
                </div>


                <div className={styles.psdbLogo}>
                    <Image
                        src="/assets/firstSection/psdbMobile.png"
                        alt="Slogan"
                        layout="fill"
                    />
                </div>

                <div className={styles.containerFix}></div>
            </div>
    )
}