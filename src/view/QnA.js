import React, { useEffect } from 'react';

function QnA({ history }) {

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실껀가요?');
        return () => {
            unblock();
        }
    }, [history]);
    
    return (
      <div>
        <h2>QnA</h2>
        
      </div>
    );
  }
  
  export default QnA;
  