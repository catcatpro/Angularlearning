import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const users = [
            { id: 11, name: "Way Lau"},
            { id: 12, name: "Naroo"},
            { id: 13, name: "Bombasto"},
            { id: 14, name: "Celeritas"},
            { id: 15, name: "Magneta"},
            { id: 16, name: "ReubberMan"},
            { id: 17, name: "Dynama"},
            { id: 18, name: "Dr IQ"},
            { id: 19, name: "Magma"},
            { id: 20, name: "Tornado"},
        
            
        ]

        return {users}
    }
}