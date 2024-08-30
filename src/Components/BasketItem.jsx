export const BasketItem = ({id, name, price, count, total, onAdd, onDown, onRemove}) => {
    return <>
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{total}</td>
            <td>
                <button onClick={() => {
                    onAdd(id)
                    }} className="btn btn-success">+</button>
                <button onClick={() => onDown(id)} className="btn btn-warning">-</button>
                <button onClick={() => onRemove(id)} className="btn btn-danger">x</button>
            </td>
        </tr>
    </>
}