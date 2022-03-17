import admin from '../styles/adminongoingview.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useEventContext } from "../context/eventcontext";
import { useEventDispatchContext } from '../context/eventcontext';

export function PageHeader1(props) {

  

  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
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


export function PageHeader2() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}> Presentera matchning 1 </li>
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

export function PageHeader3() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
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

export function PageHeader4() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
          <li className={admin.active}>  Matchning 2 </li>
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

export function PageHeader5() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
          <li className={admin.active}>  Matchning 2 </li>
          <li className={admin.active}> Presentera matchning 2 </li>
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

export function PageHeader6() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
          <li className={admin.active}>  Matchning 2 </li>
          <li className={admin.active}> Presentera matchning 2 </li>
          <li className={admin.active}> Date pågår </li>
          <li> Matchning 3 </li>
          <li> Presentera matchning 3 </li>
          <li> Date pågår </li>
          <li> Kvällens resultat! </li>
        </ul >
      </div>
    </>
  )
}

export function PageHeader7() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
          <li className={admin.active}>  Matchning 2 </li>
          <li className={admin.active}> Presentera matchning 2 </li>
          <li className={admin.active}> Date pågår </li>
          <li className={admin.active}> Matchning 3 </li>
          <li> Presentera matchning 3 </li>
          <li> Date pågår </li>
          <li> Kvällens resultat! </li>
        </ul >
      </div>
    </>
  )
}

export function PageHeader8() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
          <li className={admin.active}>  Matchning 2 </li>
          <li className={admin.active}> Presentera matchning 2 </li>
          <li className={admin.active}> Date pågår </li>
          <li className={admin.active}> Matchning 3 </li>
          <li className={admin.active}> Presentera matchning 3 </li>
          <li> Date pågår </li>
          <li> Kvällens resultat! </li>
        </ul >
      </div>
    </>
  )
}

export function PageHeader9() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
          <li className={admin.active}>  Matchning 2 </li>
          <li className={admin.active}> Presentera matchning 2 </li>
          <li className={admin.active}> Date pågår </li>
          <li className={admin.active}> Matchning 3 </li>
          <li className={admin.active}> Presentera matchning 3 </li>
          <li className={admin.active}> Date pågår </li>
          <li> Kvällens resultat! </li>
        </ul >
      </div>
    </>
  )
}

export function PageHeader10() {
  return (
    <>
      <div className={admin.container}>
        <ul className={admin.progressbar}>
          <li className={admin.active}> Matchning 1 </li>
          <li className={admin.active}>  Presentera matchning 1 </li>
          <li className={admin.active}>  Date pågår </li>
          <li className={admin.active}>  Matchning 2 </li>
          <li className={admin.active}> Presentera matchning 2 </li>
          <li className={admin.active}> Date pågår </li>
          <li className={admin.active}> Matchning 3 </li>
          <li className={admin.active}> Presentera matchning 3 </li>
          <li className={admin.active}> Date pågår </li>
          <li className={admin.active}> Kvällens resultat! </li>
        </ul >
      </div>
    </>
  )
}

export function Form() {
  const [textarea, setTextarea] = useState(
    "Hej %w!, din nästa träff är med %m vid bord %d."
  )

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form className={admin.form}>
      <mat-form-field>
      <textarea className={admin.formtextarea} value={textarea} onChange={handleChange} />
      </mat-form-field>
    </form>
  )
}

export function AbortButton() {
  return (
    <>
      <button className={admin.buttonRed}>
        <slot> Avbryt event </slot>
      </button>
    </>
  )
}

export function StandardButton() {
  return (
    <>
      <button className={admin.buttonBlue}>
        <slot> Se deltagarlista </slot>
      </button>
    </>
  )
}


export function ChangeMatch() {
  return (
    <>
      <button className={admin.buttonBlue}>
        <slot> Se/ändra matchningslista </slot>
      </button>
    </>
  )
}




export function NextButton() {

  const state = useEventContext();
  const dispatch = useEventDispatchContext();
  
  function handleClick() { 
  dispatch({
    type: 'NEXTPAGE'
  });
}

  return (
    <>
      <button className={admin.buttonGreen} onClick={handleClick}>
        <slot>
          
            Nästa &#8594;
          
        </slot>
      </button>
    </>
  )
}
/*
export function NextButton2() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing3">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}

export function NextButton3() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing4">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}

export function NextButton4() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing5">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}

export function NextButton5() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing6">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}

export function NextButton6() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing7">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}


export function NextButton7() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing8">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}

export function NextButton8() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing9">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}

export function NextButton9() {
  return (
    <>
      <button className={admin.buttonGreen}>
        <slot>
          <Link href="./adminongoing9">
            Nästa &#8594;
          </Link>
        </slot>
      </button>
    </>
  )
}

*/