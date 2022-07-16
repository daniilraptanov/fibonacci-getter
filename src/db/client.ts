import { Client, Repository } from 'redis-om'
import ticketSchema from './entities/ticket';
require('dotenv-safe').config();


export class ClientCreator {
    private static _instance: ClientCreator;
    private static _client: Client;

    static ticketRepository: Repository<any>;

    private constructor() {}
    

    static async getInstance(): Promise<ClientCreator> {
        if (!ClientCreator._instance) {
            ClientCreator._instance = new ClientCreator();
            
            ClientCreator._client = new Client();
            if (!ClientCreator._client) {
                throw Error("DB client instance does not created");
            }
            await ClientCreator._client.open(process.env.REDIS_URL);

            await ClientCreator.initTicket();
        }

        return ClientCreator._instance;
    }

    private static async initTicket() {
        ClientCreator.ticketRepository = ClientCreator._client.fetchRepository(ticketSchema);
        await ClientCreator.ticketRepository.createIndex();
    }
}
