
export default function Hit({url, title, author, points, numComments}){

    return (
        <div>
            <a href={url}>{title}</a>
            <span>({author})</span> | 
            <span>{points} points</span> | 
            <span>
                <a href="">hide</a> | 
                <a href="">past</a> | 
                <a href="">{numComments} comments</a>
            </span>
        </div>
    );

}



