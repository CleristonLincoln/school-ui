
export class Supplies {
    id: number;
    name: string;
    image: null;
    noteUsing: string;
    subgroup: string;
    unity: string;
    expenseType: string;
}


export class Group {
    id: number;
    name: string;
}

export class Subgroup  {
    id: number;
    name: string;
    groupItem = new Group();
}
