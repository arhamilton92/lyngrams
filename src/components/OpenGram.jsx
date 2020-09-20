import React, { Fragment } from 'react'

const OpenGram = () => {

    const bananamantis = {
        username: 'bananamantis',
        headerURl: 'https://sta.sh/0lcea8yfrjo',
        FooterURL: 'https://sta.sh/01p4ehaupk2a',
        unopenedImageURL: 'https://cdn.discordapp.com/attachments/749273955822731355/756993916955263048/EasterUnopenedB.png',
        pageBackgroundURL: 'https://pbs.twimg.com/media/D4kFDw5W0AAoAXg.png',
        messageBoxURL: '',
        messagePlaceholder: '',
        messageReveal: 'HI I made you a super cute gram. I hope you like it!',
        gramURL: 'https://pbs.twimg.com/media/D4kRPk_WkAEyAPj.png',
        openDate: '',
        stashLink: 'https://sta.sh/2212buansezz',
    }

    return (
        <Fragment>
            <div className="container-fluid parent">
            <div className="row w-100 mt-5 align-center">
                <div className="col parent">
                    <div className="gramContainer align-bottom p-4 pt-5 reference parent">
                        <div className="above messageBox mt-2 pt-5 letterFont">
                            {bananamantis.messageReveal}
                            <div className="mt-5">
                                <a className="links align-bottom" href={bananamantis.stashLink}>STASH</a>
                            </div>
                        </div>
                        <div className="gram"> 
                            <img src={bananamantis.gramURL}></img>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        </Fragment>
    )
}

export default OpenGram
