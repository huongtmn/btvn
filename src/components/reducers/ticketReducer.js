import chairList from "../../data/danhSachGhe.json";

import { Connect } from "react-redux";

const DEFAULT_STATE = {
    selectedList: [],         
};

export const ticketReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case "SELECT_CHAIR":{
            const data =  [...state.selectedList];
            const idx = data.findIndex((ele) => ele.soGhe === payload.soGhe);

            if(idx == -1) {
                payload.dangChon = !payload.dangChon;
                data.push(payload);
                console.log(data);
            } else {
                payload.dangChon = !payload.dangChon;
                data.splice(idx, 1);
                console.log(data);
            }

            state.selectedList = data;

            break;
        }    

        case "REMOVE_TICKET":{
            const data = [...state.selectedList];
            const idx = data.findIndex((ele) => ele.soGhe === payload.soGhe);

            payload.dangChon = !payload.dangChon;
            data.splice(idx, 1);

            state.selectedList = data;

            break;
        }

        case "PAYMENT":{
            const data = [...state.selectedList];
            
            for(var i=0; i < data.length; i++) {
                data[i].dangChon = false;
                data[i].daDat = true;
            }

            data.splice(0, data.length);
            
            alert("Bạn đã mua vé thành công!!")

            state.selectedList = data;

            break;
        }

        default:
            break;
    }



    return {...state};
}
