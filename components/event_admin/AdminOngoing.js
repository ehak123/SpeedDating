import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import ProgressBar from './ProgressBar'
import AbortButton from './buttons/AbortButton'
import StandardButton from './buttons/StandardButton'
import NextButton from './buttons/NextButton'
import ButtonsField from './ButtonsField'
import AdminForm from './AdminForm'
import admin from './adminevent.module.css'
import Countdown from '../Countdown'
import cd from '../../styles/countdown.module.css'

export default function AdminOngoing({ emitFunc, step }) {

  const steps = [
    {
      for_step: [1, 4, 7],
      title: "MATCHNING " + step + " ÄR GJORD",
      descr: "Se/ändra matchningar nedan.",
      extra: "Gå vidare för att administrera och presentera matchningar.",
    },
    {
      for_step: [2, 5, 8],
      title: "Steg " + step,
      descr: "Gå vidare för att presentera matchning med standardmeddelande eller anpassa texten nedan för tematiska event:",
    },
    {
      for_step: [3, 6, 9],
      title: "DATE " + step + " PÅGÅR",
      descr: "(använd timern för att hålla koll på tiden)",
    },
    {
      for_step: 10,
      title: "Eventet är slutfört!",
      descr: "",
    },
  ]

  var index;
  if (step === 1 || step === 4 || step === 7) {
      index = 0;
  } else if (step === 2 || step === 5 || step === 8) {
      index = 1;
  } else if (step === 3 || step === 6 || step === 9) {
      index = 2;
  } else if (step === 10) {
      index = 3;
  } else{
      console.log("Error on Step: " + step);
      throw new Error("Out of bounds");
  }
  

  return (
    <>
      <div className={utilStyles.container}>
        <ProgressBar step={step} />

        <section className={utilStyles.containerwide}>
          <h3 id={utilStyles.centertext}>
            {steps[index].title}
          </h3>
          <p>
            {steps[index].descr}
          </p>
        </section>
        {(step === 2 || step === 5 || step === 8) && <>
          <AdminForm className={admin.form} />
        </>}
        {(step === 3 || step === 6 || step === 9) && <>
          <div className={cd.container}>
            <Countdown />
          </div>
        </>}
      </div>

      <ButtonsField emitFunc={emitFunc}/>
    </>
  )
}