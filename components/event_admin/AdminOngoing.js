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

export default function AdminOngoing({ step }) {

  const steps = [
    {
      for_step: [1, 4, 7],
      title: "MATCHNING " + step + " ÄR GJORD",
      descr: "Gå vidare för att administrera och presentera matchningar.",
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
      title: "",
      descr: "",
    },
  ]

  var index;
  switch (step) {
    case (1 || 4 || 7):
      index = 0;
      break;
    case (2 || 5 || 8):
      index = 1;
      break;
    case (3 || 6 || 9):
      index = 2;
      break;
    case (10):
      index = 3;
      break;
    default:
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

      <ButtonsField />
    </>
  )
}