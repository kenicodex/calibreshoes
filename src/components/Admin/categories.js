export const
    shoes = ['male', 'female', 'unisex'],
    clothes = ['male', 'female', 'unisex'],
    phones = ['accessories', 'phone'],
    food = ['snacks', 'drinks', 'food'],
    jewery = ['rings', 'necklace', 'bangles'],
    ret = (header, arr) => {
        return (
            <optgroup label={header}>
                {arr.map(sub => <option value={sub + " " + header}>{sub + " " + header}</option>)}
            </optgroup>
        )
    }