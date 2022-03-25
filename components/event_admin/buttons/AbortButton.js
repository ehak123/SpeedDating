import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useEventContext, useDispatchContext } from "../../../context/eventcontext";
import { useEventDispatchContext } from '../../../context/eventcontext';

export default function AbortButton({emitFunc}) {
  function exit()
  {
    emitFunc('EVENT_RESET');
  }
    return (
      <>
        <button className={admin.buttonRed} onClick={exit}>
          <slot> Avbryt event </slot>
        </button>
      </>
    )
  }