import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useEventDispatchContext } from "../../../context/eventcontext";
import { useRouter } from 'next/router';

export default function NextButton() {
    const dispatch = useEventDispatchContext();
    
    // for refreshing the UI since rerendering doesn't seem to work
    const router = useRouter()

    function goNext() { 
    dispatch({
      type: 'NEXTSTEP'
    });
    router.push('/event');
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
