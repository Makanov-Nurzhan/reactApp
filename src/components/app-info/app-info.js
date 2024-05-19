
import './app-info.css'
function AppInfo({ incresed, employees }) {
    return (
        <div className='app-info'>
            <h1>Employers list</h1>
            <h2>Total employers list: {employees}</h2>
            <h2>Bonus get: {incresed}</h2>
        </div>
    )
}

export default AppInfo