import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useEventDispatchContext } from "../../../context/eventcontext";
import { useRouter } from 'next/router';

export default function StartButton({ startEvent }) {
    const dispatch = useEventDispatchContext();
    
    // for refreshing the UI since rerendering doesn't seem to work
    const router = useRouter()

    function handleClick() { 
    startEvent()
    /*dispatch({
      type: 'START_EVENT'
    });
    router.push('/event');*/
  }
  
    return (
      <>
        <button className={admin.buttonGreen} onClick={handleClick}>
          <slot>
              Starta event &#8594;
          </slot>
        </button>
      </>
    )
  }
