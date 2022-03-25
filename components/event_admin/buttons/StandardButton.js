import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useEventContext, useEventDispatchContext } from "../../../context/eventcontext";
import { useRouter } from 'next/router';

export default function StandardButton({emitFunc}) {
  const state = useEventContext();
  const dispatch = useEventDispatchContext();

  const router = useRouter();


  function changeMatch()
  {
    console.log("ChangeBool");
    dispatch({
      type: 'CHANGEBOOLTRUE'
    });
    router.push('/event');
    //Byt state så att changeMatch vissas istället
  }

    return (
      <>
        {(state.step === 1 || state.step === 4 || state.step === 7) &&
        <button className={admin.buttonBlue} onClick={changeMatch} >
          <slot> Ändra matchning </slot>
        </button>}
        {!(state.step === 1 || state.step === 4 || state.step === 7) &&
        <button className={admin.buttonGrey} disabled >
          <slot> Ändra matchning </slot>
        </button>}
      </>
    )
  }