import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';

//Then inside your component
import { grams } from '../grams.js';

const GramItem = () => {
    const { id } = useParams();
    console.log(id);

    return (

        <Fragment>
           <div>
                {grams.filter(gram => gram.gramID === id).map(filteredgram => (
                    <div className="container-fluid parent">
                        <div className="row w-75 mt-5 align-center">
                            <div className="col parent">
                                <div className="letter">
                                    <img src={filteredgram.unopenedImageURL}></img>
                                </div>
                                <div className="unopenedMessageBox align-bottom p-4 pt-5">
                                    <h1 className="above mt-2 pt-5 letterFont">{filteredgram.messageReveal}</h1>
                                </div>
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default GramItem
