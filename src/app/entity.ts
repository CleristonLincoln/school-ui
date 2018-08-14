
export class Supplies {
    id: number;
    name: string;
    image: null;
    noteUsing: string;
    subgroup: string;
    unity = new Unity();
    expenseType: string;
}


export class Group {
    id: number;
    name: string;
}

export class Unity {
    id: number;
    name: string;
    unity: string;
}

export class Subgroup  {
    id: number;
    name: string;
    groupItem = new Group();
}


export class Contato {
    id: number;
    name: string;
    fone1: string;
    fone2: string;
    email: string;
    funcao: string;
}

export class Company {
    id: number;
    socialName: string;
    contatos = new Array<Contato>();
    supplies = new Array<Supplies>();
}
