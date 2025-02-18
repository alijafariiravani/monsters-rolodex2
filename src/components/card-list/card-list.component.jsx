import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props; // Destructure monsters from props

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const { name, email, id } = monster; // Destructure properties here

                    return ( // Return the JSX from the map function
                        <div className="card-container" key={id}>
                            <img 
                                alt={`monster ${name}`} // Corrected string interpolation
                                src={`https://robohash.org/${id}?set=set2&size=180x180`} // Corrected string interpolation
                            /> 
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;
