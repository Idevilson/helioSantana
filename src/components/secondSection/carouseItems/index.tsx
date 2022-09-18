import React from 'react';
import styles from './styles.module.scss';
import Image from "next/image";

function CarouselItem1() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Sou Hélio Santana, policial <br/>
                    civil há mais de 25 anos, <br/>
                    candidato a Deputado Estadual. <br/>
                    Em meu programa eleitoral, <br/>
                    tenho dito que com salário de policial<br/>
                    eu sustento minha família com dignidade. <br/>
                    Por isso, se eleito, doarei o salário <br/>
                    de deputado às instituições de caridade <br/>
                    ou pessoas com graves problemas de Saúde.

                </h2>

            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem2() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Tenho recebido elogios por essa iniciativa, <br/>
                    e sido questionado sobre os auxílios que os <br/>
                    deputados recebem. Quero dizer a você, <br/>
                    tocantinense: sendo eleito, além do salário <br/>
                    de deputado, também doarei auxilio moradia, <br/>
                    auxilio creche, auxílio alimentação e auxílio <br/>
                    paletó. Qualquer tipo de auxílio de deputado <br/>
                    eu devolverei a população!
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem3() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Não quero ganhar dinheiro com política, <br/>
                    como acontece com muitos mandatários. <br/>
                    Quero trabalhar com o povo e para o povo.
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

export {
    CarouselItem1,
    CarouselItem2,
    CarouselItem3
};