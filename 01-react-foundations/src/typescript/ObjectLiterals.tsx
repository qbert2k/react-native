interface Person {
    firstName: string;
    lastName: string;
    age: number;
    isAlive?: boolean;
    address: Address;
}

interface Address {
    country: string;
    houseNumber: number;
}

export const ObjectLiterals = () => {

    const person: Person = {
        firstName: 'Javier',
        lastName: 'Rojas',
        age: 42,
        address: {
            country: 'Ireland',
            houseNumber: 123456
        }
    }

    return (
        <>
            <h3>Object Literals</h3>

            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    );
}