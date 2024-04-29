type ID = string | number

type DefaultResponse = {
    id: ID, 
    name: string, 
    createAt: string
}

type InputDto = {
    name: string,
    active: boolean,
}

interface IRepository {
    readonly model: any;
    findAll(): DefaultResponse[];
    findById( id: ID ): DefaultResponse;
    insert(data: InputDto): DefaultResponse;
    update(id:ID, data:InputDto): DefaultResponse;
    destroy(id: ID): boolean;
}

class UserRepository implements IRepository {
    model: any;

    constructor(model: any) {
        this.model = model
    }

    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: ID): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    insert(data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: ID, data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destroy(id: ID): boolean {
        throw new Error("Method not implemented.");
    }
}

class UserRepositoryMongo implements IRepository {
    model: any;

    constructor(model: any) {
        this.model = model
    }

    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: ID): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    insert(data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: ID, data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destroy(id: ID): boolean {
        throw new Error("Method not implemented.");
    }

}

function getAllUsers(repository: IRepository): DefaultResponse[] {
    return repository.findAll()
}

export {}