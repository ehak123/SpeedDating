import utilStyles from '../../styles/utils.module.css'
import NextButton from './buttons/NextButton'
import { useEventDispatchContext } from '../../context/eventcontext';
import AbortButton from './buttons/AbortButton'
import StandardButton from './buttons/StandardButton'

import admin from './adminevent.module.css'

export default function ButtonsField({emitFunc}) {
    return (
        <div className={utilStyles.adminbuttonbox}>
            <AbortButton emitFunc={emitFunc}/>
            <StandardButton/>
            <NextButton emitFunc={emitFunc}/>
        </div>
    )
}