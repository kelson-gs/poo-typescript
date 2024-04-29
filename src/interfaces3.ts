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

interface Searchable {
    search(filter: string): DefaultResponse[]
}

interface EventManager {
    dispatch(payload: object): void
}

interface FullRepository extends IRepository, Searchable, EventManager {}

class UserRepository implements FullRepository {
    model: any;

    dispatch(payload: object): void {
        throw new Error("Method not implemented.");
    }

    search(filter: string): DefaultResponse[] {
        throw new Error("Method not implemented.");
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

export {}