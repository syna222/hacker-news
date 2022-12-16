export default function Footer({onClick, setSearch, search}){      //name of property, handed down by App-component

    return (
        <footer id='inhalt'>
            <div className="footer">
                <div className="footer_links">
                    <a href="" >Guidelines</a> | 
                    <a href="" >FAQ</a> | 
                    <a href="" >Lists</a> | 
                    <a href="" >API</a> | 
                    <a href="" >Security</a> | 
                    <a href="" >Legal</a> | 
                    <a href="" >Apply to YC</a> | 
                    <a href="" >Contact</a>
                </div>
                <div>
                    <form>
                        <span>Search:</span>
                        <input id="input-text" type="text" onChange={(e) => setSearch(e.target.value)}/> {/*onChange m function setSearch to e.target.value*/}
                        {/*<input onClick={onClick} type="submit" value="go!"/>*/} 
                    </form>
                </div>
            </div>
        </footer>
    );
}