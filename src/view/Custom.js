import React, { useEffect } from 'react';

function Custom({ history }) {

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실껀가요?');
        return () => {
            unblock();
        }
    }, [history]);

    return (
      <div>
        <h2>Custom</h2>
        
      </div>
    );
  }
  
  export default Custom;
  