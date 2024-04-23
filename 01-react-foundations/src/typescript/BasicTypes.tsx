export const BasicTypes = () => {

    const name: string = 'Javier';
    const age: number = 42;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'Java', 'SpringBoot'];

    powers.push('ReactNative');

    return (
        <>
            <h3>Basic Types</h3>

            {name} {age} {isActive ? 'true' : 'false'}
            <br/>
            {powers.join(', ')}
        </>
    );
}