function Skill() {
    const Skills = ['HTML', 'CSS', 'JavaScript', 'React']
    return (
        <div className="skills-card">
            <h2>My Skills</h2>
            {Skills.map((Skill, index) => (
                <p key={index}>{Skill}</p>
            ))}
        </div>
    )
}

export default Skill