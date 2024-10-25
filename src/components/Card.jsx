export const Card = (props) => {
    const { name, sprites } = props;
    return (
        <div>
            <h1>{name}</h1>
            <img src={sprites.front_default} alt={name} />
        </div>
    );
};
