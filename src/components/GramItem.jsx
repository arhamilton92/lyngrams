import React from 'react'
import Grams from '../grams.js';

const GramItem = () => {

    const bananamantis = {
            username: 'bananamantis',
            headerURl: 'https://sta.sh/0lcea8yfrjo',
            FooterURL: 'https://sta.sh/01p4ehaupk2a',
            unopenedImageURL: 'https://cdn.discordapp.com/attachments/749273955822731355/756993916955263048/EasterUnopenedB.png',
            pageBackgroundURL: 'https://pbs.twimg.com/media/D4kFDw5W0AAoAXg.png',
            messageBoxURL: '',
            messagePlaceholder: '',
            messageReveal: 'HI I made you a super cute gram. I hope you like it!',
            gramUrl: 'https://pbs.twimg.com/media/D4kRPk_WkAEyAPj.png',
            openDate: '',
            stashLink: 'https://sta.sh/2212buansezz',
        }

    return (
        <div>
            <div className="container-fluid parent">
                <div className="row w-75 mt-5 align-center">
                    <div className="col parent">
                        <div className="letter">
                            <img src={bananamantis.unopenedImageURL}></img>
                        </div>
                        <div className="unopenedMessageBox align-bottom p-4 pt-5">
                            <h1 className="above mt-2 pt-5 letterFont">{bananamantis.messageReveal}</h1>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default GramItem
