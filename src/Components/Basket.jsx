import { useEffect } from "react"
import { BasketItem } from "./BasketItem"

export const Basket = ({cart, total, onTotal, onAdd, onDown, onRemove}) => {

    useEffect(() => {
        onTotal(cart.reduce((initValue, curValue) => initValue + (curValue.count * curValue.price), 0))
    }, [cart])

    return <div className="col-md-5">
        <div>
            <h1>
                Total: {total}
            </h1>
        </div>
        <h1>Items: {cart.length}</h1>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    cart.map(elm => <BasketItem key={elm.id}{...elm} 
                        onAdd={onAdd} 
                        onDown={onDown} 
                        onRemove={onRemove} 
                        />)
                }
            </tbody>
            
        </table>
    </div>
}