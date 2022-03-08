import admin from '../styles/adminongoingview.module.css'
import utilStyles from '../styles/utils.module.css'


export const siteTitle = 'STH Speed Dating'

export function PageHeader() {
  return (
          <>
            <div className={admin.container}>
              <ul className={admin.progressbar}>
                <li className={admin.active}>ç Matchning 1 </li>  
                <li> Presentera matchning 1 </li>  
                <li> Date pågår </li>
                <li> Matchning 2 </li>  
                <li> Presentera matchning 2 </li>  
                <li> Date pågår </li>
                <li> Matchning 3 </li>  
                <li> Presentera matchning 3 </li>  
                <li> Date pågår </li>  
                <li> Kvällens resultat! </li>  
              </ul >
            </div>
          </>
  )
}