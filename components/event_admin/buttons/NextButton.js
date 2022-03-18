import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useEventContext } from '../../../context/eventcontext';
import { useEventDispatchContext } from "../../../context/eventcontext";
import { useRouter } from 'next/router';

export default function NextButton({emitFunc}) {
    const state = useEventContext();
    const dispatch = useEventDispatchContext();
    
    // for refreshing the UI since rerendering doesn't seem to work
    const router = useRouter()

    function goNext() { 
    /*
    dispatch({
      type: 'NEXTSTEP'
    });*/
    let nextStep = state.step +1;
    if(nextStep === 3)
    {
      emitFunc('USER_STEP2')
    }
    else if(nextStep === 4)
    {
      emitFunc('USER_STEP5')
    }
    else if(nextStep === 6)
    {
      emitFunc('USER_STEP6')
    }
    else if(nextStep === 7)
    {
      emitFunc('USER_STEP9')
    }
    else if(nextStep === 9)
    {
      emitFunc('USER_STEP10')
    }
    else if(nextStep === 10)
    {
      emitFunc('USER_STEP13')
    }


    emitFunc('STEP' + nextStep);
    
    //emitFunc('NEXTSTEP');
    
    //router.push('/event');
  }
  
    return (
      <>
        <button className={admin.buttonGreen} onClick={goNext}>
          <slot>
              Nästa &#8594;
          </slot>
        </button>
      </>
    )
  }
