const DEFAULT_STATE = {
    studentList: [
        {
            id: 1,
            studentId: "190001",
            fullName: "Nguyễn Văn A",
            phoneNumber: "09381111111",
            email: "nguyenvana@gmail.com",
        },
        {
            id: 2,
            studentId: "190023",
            fullName: "Nguyễn Văn B",
            phoneNumber: "093822232232",
            email: "nguyenvanb@gmail.com",
        },
    ],

    selectedStudent: null,
};


export const studentReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action; 

    switch (type) {
        case "ADD_STUDENT":{
            const data = [...state.studentList];

            data.push({
                ...payload,
                id: Date.now(),
            });

            state.studentList = data;

            break;
        }    
            
        case "SELECT_STUDENT":{
            state.selectedStudent = payload;
            
            break;
        }

        case "UPDATE_STUDENT":{
            state.selectedUser = null;
            
            state.studentList = state.studentList.map(ele => ele.id === payload.id ? payload : ele);

            break;
        }

        case "DELETE_STUDENT":{
            state.studentList = state.studentList.filter((ele) => ele.id === payload.id ? false : true);

            break;
        }

        default:
            break;
    }

    return { ...state };
};
  