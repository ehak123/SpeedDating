import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Head from 'next/head'
import StartViewHeader from '../components/startview/startviewheader'
import utilStyles from '../styles/utils.module.css'

import cm from '../styles/changematch.module.css'

const men = [
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

const women = [
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

function ChangeMatch() {
  const [characters1, updateCharacters1] = useState(men);
  const [characters2, updateCharacters2] = useState(women);


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

  return (
      <>    
      <div>
        <>
        <StartViewHeader size="small"/>
         <h3 id={utilStyles.centertext} >
            <br /> 
            change the matching-result manually with drag and drop
            <br />         
        </h3>        
        </>


        <Head>
        <title>Change Match</title>
        </Head>
        
        <>
        <div className={cm.container}>
            <br />         
            <div className={cm.dndbox}>
            <DragDropContext onDragEnd={handleOnDragEnd1}>
            <Droppable droppableId={cm.characters}>
                {(provided) => (
                <ul className={cm.characters} {...provided.droppableProps} ref={provided.innerRef}>
                    {characters1.map(({id, name, thumb}, index) => {
                    return (
                        <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className={cm.charactersThumb}>
                                <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>
                                { name }
                            </p>
                            </li>
                        )}
                        </Draggable>
                    );
                    })}
                    {provided.placeholder}
                </ul>
                )}
            </Droppable>
            </DragDropContext>
            </div>

            <div className={cm.dndbox}>
            <DragDropContext onDragEnd={handleOnDragEnd2}>
            <Droppable droppableId={cm.characters}>
                {(provided) => (
                <ul className={cm.characters} {...provided.droppableProps} ref={provided.innerRef}>
                    {characters2.map(({id, name, thumb}, index) => {
                    return (
                        <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className={cm.charactersThumb}>
                                <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>
                                { name }
                            </p>
                            </li>
                        )}
                        </Draggable>
                    );
                    })}
                    {provided.placeholder}
                </ul>
                )}
            </Droppable>
            </DragDropContext>
            </div>
   
         </div>

        </>
    </div>
    </>
  );
}

export default ChangeMatch;
