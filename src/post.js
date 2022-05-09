import React from "react";

function Post(PROPS){
    return(     //<> dicono che puoi inserire più elemtni padre e figlio all'interno di una funzione
        <>        
            <div className="Post" >
  
                <h1 className="peopleName" >{PROPS.autore}</h1>
                <h3>{PROPS.titolo}</h3> 
                <button onClick={() => console.log("BRAVISIMO CHE MI HAI CLICCATO, TE NE INTENDI") } >CLICCAMI</button>

            </div>
        </>
    )
}

/*bisogna dirgli che vogliamo usare delle props, quindi lo mettimao come parameto. Ogni variabile che potrà essere
cambiata dovra essere scritta con prima PROPS. Il this.props non lo usi qui perchè la funzione al suo interno non ha un
altra funzione a ci fa riferimento una seconda funzione   */

export default Post