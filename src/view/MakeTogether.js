import React, { useEffect } from 'react';

function MakeTogether({ history }) {

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실껀가요?');
        return () => {
            unblock();
        }
    }, [history]);

    return (
      <div>
        <h2>MakeTogether</h2>
        
      </div>
    );
  }
  
  export default MakeTogether;
  