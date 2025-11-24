function UserCard( { name, age, city, job } ) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h4>{city}</h4>
            <h1>{job}</h1>
        </div>
    )
}

export default UserCard 