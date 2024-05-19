import './app-filter.css'

const AppFilter = (props) => {
    const btnData = [
        { name: 'all', label: 'All employess' },
        { name: 'rise', label: 'Upward' },
        { name: 'salary', label: 'Salary over 1000$' }
    ];
    const btn = btnData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterBtnClick(name)}>
                {label}
            </button >
        )
    })
    return (
        <div className="btn-group">
            {btn}
        </div>
    )
}

export default AppFilter