function AnimalList() {

    const animals = ["Dog", "Cat", "Lion", "Elephant"]

    return (
        <div className="cars-card">
            <h2>Animals</h2>
            {animals.map((animal, index) => (
                <p key={index}>{animal}</p>
            ))}
        </div>
    )

}

export default AnimalList