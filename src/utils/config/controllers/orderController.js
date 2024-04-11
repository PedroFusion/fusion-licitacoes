import dayjs from 'dayjs';
//import fs from 'fs';
import orderDatabase from '../databases/stock-control.json'

function orderController (model, qtd_toner, user_email) {
    

    try {
        
        const modelOrder = {
            "id": orderDatabase.stock.length+1,
            "toner-model" : model,
            "qtd-toner": qtd_toner,
            "date": dayjs().format(),
            "asResolved?": false,
            "delivered-by": user_email
        }

        orderDatabase.stock.push(modelOrder);
        console.log(orderDatabase)

    } catch (error) {
        console.log(error)
    }

}


export default orderController;
