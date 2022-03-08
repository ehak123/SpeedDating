import admin from '../styles/adminongoingview.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


export const siteTitle = 'STH Speed Dating'

export function PageHeader() {
  return (
      <div className={utilStyles.container}>
        <header className={startpage.header}>
          <>
          <div className={utilStyles.container}>
            <section id={startpage.container}>
            <div className={admin.container}>
              <ul className={admin.progressbar}>
                <li className={active}> Matchning 1 </li>  
                <li> Presentera M1 </li>  
                <li> Date pågår </li>
                <li> Matchning 2 </li>  
                <li> Presentera M2 </li>  
                <li> Date pågår </li>
                <li> Matchning 3 </li>  
                <li> Presentera M3 </li>  
                <li> Date pågår </li>  
                <li> Kvällens resultat! </li>  
              </ul >
            </div>
            </section>
          </div>
          </>
        </header>
      </div>
  )
}