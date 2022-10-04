import loading from "../assets/loading.gif";

const Loading = () => {
    return( 
    <div className="h-20 m-5">
    <img className="w-20 float-left" src={loading} alt="loading..."></img>
    <p className="py-7">Loading...</p>
    </div>

    );
}

export default Loading;