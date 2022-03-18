import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useEventDispatchContext } from "../../../context/eventcontext";
import { useRouter } from 'next/router';

export default function StartButton({emitFunc}) {
    const dispatch = useEventDispatchContext();
    
    // for refreshing the UI since rerendering doesn't seem to work
    const router = useRouter()

    function handleClick() { 
    console.log("starting event");
      emitFunc('START_EVENT');
    /*
    dispatch({
      
      type: 'START_EVENT'
    });*/
    //router.push('/event');
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
