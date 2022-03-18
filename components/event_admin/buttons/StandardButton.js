import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useEventContext, useEventDispatchContext } from "../../../context/eventcontext";

export default function StandardButton() {
    return (
      <>
        <button className={admin.buttonBlue}>
          <slot> Se deltagarlista </slot>
        </button>
      </>
    )
  }