import { Entity, Schema } from 'redis-om';

class Ticket extends Entity {}

const ticketSchema = new Schema(Ticket, {
    fibonacci: { type: 'number' },
    ticket: { type: 'string' },
})

export default ticketSchema;
