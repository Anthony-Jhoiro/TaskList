import type {NextPage} from 'next'
import {ComponentWithAlerts} from "../types/alerts";
import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


const Home: NextPage<ComponentWithAlerts> = () => {
  return (
    <div className={''}>
      <p>Redirecting...</p>
    </div>
  )
}

export async function getStaticProps({locale}: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default Home
