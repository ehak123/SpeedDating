import admin from './adminevent.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useEventContext, useDispatchContext } from "../../context/eventcontext";
import { useEventDispatchContext } from '../../context/eventcontext';

export function ChangeMatch() {
    return (
      <>
        <button className={admin.buttonBlue}>
          <slot> Se/ändra matchningslista </slot>
        </button>
      </>
    )
  }