import admin from '../styles/adminongoingview.module.css'

export function PageHeader() {
  return (
          <>
            <div className={admin.container}>
              <ul className={admin.progressbar}>
                <li className={admin.active}>Matchning 1 </li>  
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

export function AbortButton() {
  return (
          <>
            <button  className={admin.buttonRed}>
            <slot> Avbryt event! </slot>
            </button>
          </>
  )
}

export function BlueButton() {
  return (
          <>
            <button  className={admin.buttonBlue}>
            <slot> Se deltagarlista </slot>
            </button>
          </>
  )
}