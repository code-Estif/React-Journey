function AnimalsList() {
    const animals = ['dog', 'cat', 'lion'] 
  
    return (
      <div>
        {animals.map((animal, index) => (
          <p key={index}>{animal}</p> 
        ))}
      </div>
    );
  }
  
  export default AnimalsList;  