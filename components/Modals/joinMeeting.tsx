
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useAppContext } from '@/store/store';
type Props = {
   toOpen:boolean
}
export const JoinMeeting = (props:Props) => {
 const {displayJoinLink, setDisplayJoinLink}=useAppContext();

  return (
    <div  >

      <Modal open={displayJoinLink} onClose={()=>setDisplayJoinLink(false)} center >
        <div className='flex flex-col gap-4 p-4 rounded '>
        <h2>Join Meeting</h2>
       <input required type="text" className='outline-secondary p-2' placeholder='Paste a link ...' />
       <button className='bg-secondary text-white rounded-lg w-32 h-10'>Join</button>
       </div>
      </Modal>
    </div>
  );
};

// ReactDOM.render(<JoinMeeting toOpen={true} />, document.getElementById('app'));