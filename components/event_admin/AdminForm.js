import admin from './adminevent.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useEventContext, useDispatchContext } from "../../context/eventcontext";
import { useEventDispatchContext } from '../../context/eventcontext';

export default function Form() {
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