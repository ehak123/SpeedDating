import admin from './adminevent.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useEventContext, useEventDispatchContext } from "../../context/eventcontext";

export default function ProgressBar({ step }) {
    const m = "Matchning ";
    const p = "Presentera matchning ";
    const d = "Date pågår";
    const k = "Kvällens resultat!";
    const s1 = "1";
    const s2 = "2";
    const s3 = "3";

    const m1 = m.concat(s1);
    const m2 = m.concat(s2);
    const m3 = m.concat(s3);
    const p1 = p.concat(s1);
    const p2 = p.concat(s2);
    const p3 = p.concat(s3);

    return (
        <div className={admin.container}>
            <ul className={admin.progressbar}>
                {step === 1 && <>
                    <li className={admin.active}> {m1} </li>
                    <li> {p1} </li>
                    <li> {d} </li>
                    <li> {m2} </li>
                    <li> {p2} </li>
                    <li> {d} </li>
                    <li> {m3} </li>
                    <li> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 2 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li> {d} </li>
                    <li> {m2} </li>
                    <li> {p2} </li>
                    <li> {d} </li>
                    <li> {m3} </li>
                    <li> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 3 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li> {m2} </li>
                    <li> {p2} </li>
                    <li> {d} </li>
                    <li> {m3} </li>
                    <li> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 4 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m2} </li>
                    <li> {p2} </li>
                    <li> {d} </li>
                    <li> {m3} </li>
                    <li> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 5 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m2} </li>
                    <li className={admin.active}> {p2} </li>
                    <li> {d} </li>
                    <li> {m3} </li>
                    <li> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 6 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m2} </li>
                    <li className={admin.active}> {p2} </li>
                    <li className={admin.active}> {d} </li>
                    <li> {m3} </li>
                    <li> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 7 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m2} </li>
                    <li className={admin.active}> {p2} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m3} </li>
                    <li> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 8 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m2} </li>
                    <li className={admin.active}> {p2} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m3} </li>
                    <li className={admin.active}> {p3} </li>
                    <li> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 9 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m2} </li>
                    <li className={admin.active}> {p2} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m3} </li>
                    <li className={admin.active}> {p3} </li>
                    <li className={admin.active}> {d} </li>
                    <li> {k} </li>
                </>}
                {step === 10 && <>
                    <li className={admin.active}> {m1} </li>
                    <li className={admin.active}> {p1} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m2} </li>
                    <li className={admin.active}> {p2} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {m3} </li>
                    <li className={admin.active}> {p3} </li>
                    <li className={admin.active}> {d} </li>
                    <li className={admin.active}> {k} </li>
                </>}
            </ul>
        </div>
    )
}
