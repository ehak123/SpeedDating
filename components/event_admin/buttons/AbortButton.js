import admin from '../adminevent.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useEventContext, useDispatchContext } from "../../../context/eventcontext";
import { useEventDispatchContext } from '../../../context/eventcontext';

export default function AbortButton() {
    return (
      <>
        <button className={admin.buttonRed}>
          <slot> Avbryt event </slot>
        </button>
      </>
    )
  }