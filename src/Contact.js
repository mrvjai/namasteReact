export const Contact = ()=>{
    return(
        <div>
            <h1 className="ml-4">Contact me on <b>mr.vjai.3@gmail.com</b></h1>
            <form>
                <input className="m-4 p-2 border border-gray-400 rounded" type="text" placeholder="Enter your name"/><br/>  
                <input className="m-4 p-2 border border-gray-400 rounded" type="email" placeholder="Enter your email"/><br/>
                <textarea className="m-4 p-2 border border-gray-400 rounded" placeholder="Enter your message"></textarea><br/>
                <button className="m-4 p-2 bg-blue-500 text-white rounded" type="submit">Send</button>
            </form>
        </div>
    )
}