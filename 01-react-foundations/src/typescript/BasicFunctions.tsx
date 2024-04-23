export const BasicFunctions = () => {

    const sumNumbers = (a: number, b: number): string => {
        return `${a + b}`;
    }

    return (
        <>
            <h3>Basic Functions</h3>

            <span>Result: {sumNumbers(2, 8)}</span>
        </>
    );
}