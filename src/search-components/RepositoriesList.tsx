import CircleAvatar from "../common-components/CircleAvatar";
import Loading from "../common-components/Loading";
import './RepositoriesList.scss';

interface RepositoriesListInterface {
    data: any[],
    loading: boolean
}

interface DataRepository {
    id: string,
    name: string,
    owner: Owner,
    description: string,
    html_url: string
}

interface Owner {
    login: string,
    avatar_url: string
}

const RepositoriesList = ({data, loading} : RepositoriesListInterface) => {
    if(loading) {
        return <Loading />
    }
    else if(data.length === 0 ) {
        return <div className="text-center text-sky-800 text-xl">Please enter a valid input and try again</div>
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
                {data.map((repo: DataRepository) => {
                    return (
                        <tr key={repo.id}>
                            <td><a className="px-2 text-sky-700 " target="_blank" rel="noopener noreferrer" href={repo.html_url}>{repo.name}</a></td>
                            <td><CircleAvatar url={repo.owner.avatar_url} title={repo.owner.login} /></td>
                            <td><p className="px-2 ">{repo.description}</p></td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        )
    }

}

export default RepositoriesList;