
export default function Hit({rank, url, title, author, points, numComments}){
    
    console.log({rank})
    return (
        
        <div id='inhalt'>
            <div className="index">
                <span className='rank'>{rank}</span> | 
            
                <a href={url}>{title}</a>
                <br />
                <span className='subtext_color minor_height'>({author})</span> | 
                <span className='subtext_color minor_height'>{points} points</span> | 
                <span className='subtext_color minor_height'>
                    <a href="">hide</a> | 
                    <a href="">past</a> | 
                    <a href="">{numComments} comments</a>
                </span>
            </div>
        </div>
    );

}



