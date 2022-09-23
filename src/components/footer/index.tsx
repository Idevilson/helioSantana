import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {

    return(
        <>
            <footer className={styles.footerContainer} id="footer">
                <div className={styles.footerTop}>
                    <Image
                        src="/assets/footer/siga.png"
                        alt="Siga as Redes Sociais"
                        width={590}
                        height={27}
                        quality={100}
                    />
                    <div className={styles.socialIconsContainer}>
                        <div className={styles.alignIcons}>
                            <Link href="https://www.instagram.com/laercio_gaia">
                                <a>
                                    <Image
                                        src="/assets/footer/instagram.png"
                                        alt="ícone do instagram"
                                        width={39}
                                        height={39}
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className={styles.alignIcons}>
                            <Link href="https://www.facebook.com/laercio.marcely">
                                <Image
                                    src="/assets/footer/facebook.png"
                                    alt="ícone do facebook"
                                    width={39}
                                    height={39}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.nameAndNumber}>
                    <Image
                        src="/assets/footer/nameAndNumber.png"
                        alt="Nome e número da candidata"
                        width={854}
                        height={200}
                        quality={100}
                    />
                </div>

                <div className={styles.textBottom}>
                    <h1>
                        LEI N°9.504/97 - FEDERAÇÃO PSDB - CIDADANIA. CNPJ: 47.632.645/0001-00 / 11.274.042/0001-37
                    </h1>
                    <Image
                        src="/assets/footer/PSDB.png"
                        alt="Nome e número da candidata"
                        width={128}
                        height={29}
                        quality={100}
                    />
                </div>
            </footer>

            <footer className={styles.footerContainerMobile} id="footer">
                <div className={styles.nameAndNumberMobile}>
                    <Image
                        src="/assets/footer/nameAndNumberMobile.png"
                        alt="Nome e número do candidato"
                        width={978}
                        height={358}
                        quality={100}
                    />
                </div>

                <div className={styles.footerTopMobile}>
                    <Image
                        src="/assets/footer/sigaMobile.png"
                        alt="Siga as Redes Sociais"
                        width={952}
                        height={43}
                        quality={100}
                    />
                </div>

                <div className={styles.logoDoPartido}>
                    <Image
                        src="/assets/footer/PSDB.png"
                        alt="Nome e número da candidata"
                        width={227}
                        height={49}
                        quality={100}
                    />
                </div>

                <div className={styles.textBottomMobile}>
                    <h1>
                        LEI N°9.504/97 - FEDERAÇÃO PSDB - CIDADANIA. CNPJ: 47.632.645/0001-00 / 11.274.042/0001-37
                    </h1>
                </div>
            </footer>
        </>
    )
}