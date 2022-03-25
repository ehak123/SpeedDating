import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Head from 'next/head';
import StartViewHeader from '../../components/startview/startviewheader';
import utilStyles from '../../styles/utils.module.css';
import { matchTwoGroups, switchIndex } from '../../components/event_admin/matchingAlg';
import { useEventContext } from '../../context/eventcontext';
import { useEventDispatchContext } from '../../context/eventcontext';
import MatchUserCard from '../../components/MatchUserCard'
import MatchUserContainer from '../../components/MatchUserContainer';
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import cm from '../../styles/changematch.module.css';

var matchhistory1 = [[-1]];
var matchhistory2 = [[-1]];
var matchhistory3 = [[-1]];

var men = [
  {
    id: 'man1',
    name: 'Gary Goodspeed',
    thumb: '/images/man1.jpeg'
  },
  {
    id: 'man2',
    name: 'Little Cato',
    thumb: '/images/man2.png'
  },
  {
    id: 'man3',
    name: 'Bob Hansson',
    thumb: '/images/man3.jpg'
  },
  {
    id: 'man4',
    name: 'Mooncake Svensson',
    thumb: '/images/man4.jpeg'
  },
  {
    id: 'man5',
    name: 'Quinn Ergon',
    thumb: '/images/man5.jpeg'
  }
]

var women = [
  {
    id: 'woman1',
    name: 'Lena Lundin',
    thumb: '/images/woman1.png'
  },
  {
    id: 'woman2',
    name: 'Pluttan Larsson',
    thumb: '/images/woman2.jpg'
  },
  {
    id: 'woman3',
    name: 'Isabella Vampyr',
    thumb: '/images/woman3.jpeg'
  },
  {
    id: 'woman4',
    name: 'Angela Merkel',
    thumb: '/images/woman4.jpeg'
  },
  {
    id: 'woman5',
    name: 'Fia Larsdotter',
    thumb: '/images/woman5.jpeg'
  }
]

export default function ChangeMatch() {
  const [characters1, updateCharacters1] = useState(men);
  const [characters2, updateCharacters2] = useState(women);
  const state = useEventContext();
  const dispatch = useEventDispatchContext();

  /*
  function handleOnDragEnd1(result) {
    if (!result.destination) return;
    const items1 = Array.from(men);
    const [reorderedItem] = items1.splice(result.source.index, 1);
    items1.splice(result.destination.index, 0, reorderedItem);

    updateCharacters1(items1);
  }

  function handleOnDragEnd2(result) {
    if (!result.destination) return;

    const items2 = Array.from(women);
    const [reorderedItem] = items2.splice(result.source.index, 1);
    items2.splice(result.destination.index, 0, reorderedItem);

    updateCharacters2(items2);
  }
  */
  const router = useRouter()
  function randomizeGroups() {
    var output = [];
    if (matchhistory1 === [[-1]]) {
      matchhistory1 = matchTwoGroups(men, women, [[-1]], [[-1]]);
      output = matchhistory1;
      console.log(output);
    }
    else if (matchhistory2 === [[-1]]) {
      matchhistory2 = matchTwoGroups(men, women, matchhistory1, [[-1]]);
      output = matchhistory2;
      console.log(output);
    }
    else if (matchhistory3 === [[-1]]) {
      matchhistory3 = matchTwoGroups(men, women, matchhistory1, matchhistory2);
      output = matchhistory3;
      console.log(output);
    }
    updateCharacters1(output[0]);
    updateCharacters2(output[1]);
    router.push('/event');
  }

  //randomizeGroups();
  console.log("men: " + men);
  console.log("women: " + women);
  console.log("char1: " + characters1);
  console.log("char2: " + characters2);

function changematchbool()
{
  dispatch({
    type: 'CHANGEBOOLFALSE'
  });
  router.push('/event');
}
  return (
    <>
      <div>
        <>
          
          <h3 id={utilStyles.centertext} >
            Change Matching
          </h3>
        </>


        <Head>
          <title>Change Match</title>
        </Head>

        <> 
      
          <div className={cm.container}>
            <Grid container alignItems="center" spacing={2}> 
            <Grid item xs display='flex'> 
           
            <MatchUserContainer>
              {characters1 ? characters1.map(({ id, name, thumb }) => {
                return (
                  <MatchUserCard img={thumb} name={name} />
                )
              })
              : "Loading... "}
            </MatchUserContainer>
            </Grid>

            <Grid item xs>
            <MatchUserContainer>
              {characters2 ? characters2.map(({ id, name, thumb }) => {
                return (
                  <MatchUserCard img={thumb} name={name} />
                )
              }) : "Loading..."}
                

            </MatchUserContainer>
         
            </Grid>
            </Grid>
          </div>

          <button onClick={randomizeGroups} className={(cm.button, cm.randomizeButton)}>
            <slot>
              Slumpa &#8594;
            </slot>
          </button>
          <button onClick={changematchbool} className={(cm.button, cm.confirmButton)}>
            <slot>
              Klar &#8594;
            </slot>
          </button>
        </>
      </div>
    </>
  );
}
