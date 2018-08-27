


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

export class Company {
    id: number;
    nameCompany: string;
    socialName: string;
    image: string;
    cnpj: string;
    ie: string;
    im: string;
    complement: string;
    numberHome: string;
    street: string;
    people =  new People();
    supplies = new Array<Supplies>();
}

export class People {
    id: number;
    name: string;
    cpf: string;
    email: string;
    phone01: string;
    phone2: string;
    note: string;
    numberHome: string;
    complemente: string;
    ative: boolean;
    street: string;
    function = new Function();
}
