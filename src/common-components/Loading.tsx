import loading from "../assets/loading.gif";

const Loading = () => {
    return( <>
    <img className="w-24 float-left" src={loading} alt="loading..."></img>
    <p>Loading...</p>
    </>
    );
}

export default Loading;