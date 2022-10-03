import CircleAvatar from "../common-components/CircleAvatar";
import Loading from "../common-components/Loading";
import './RepositoriesList.scss';

const RepositoriesList = ({data, loading} : any) => {
    if(loading) {
        return <Loading />
    }
    else if(data.length === 0 ) {
        return <div className="text-center text-red-800 text-xl">No data was found!</div>
    }
    else {
        return (
            <table className="table-repositories">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map((repo: any) => {
                    return (
                        <tr key={repo.id}>
                            <td><a className="px-2 text-sky-700" target="_blank" href={repo.html_url}>{repo.name}</a></td>
                            <td><CircleAvatar url={repo.owner.avatar_url} title={repo.owner.login} /></td>
                            <td><p className="px-2">{repo.description}</p></td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        )
    }

}

export default RepositoriesList;