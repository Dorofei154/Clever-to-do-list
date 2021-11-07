export interface IArrTodo{ id: string;
     data: { 
         id: string;
         text: string;
         done:boolean;
           header: string;
            date:moment.Moment | number;
             month :moment.Moment | number 
    };
}

