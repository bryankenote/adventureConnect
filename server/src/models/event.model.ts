import mongoose from 'mongoose';
import { EventOrganizerSchema } from './event.organizer.model';
import { UserSchema } from './user.model';

const modelOptions = {
    timestamps: true
}

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Event Name required'],
        minLength: [
            2,
            'Name must be at least 2 characters long'
        ]},
    description: {
        type: String,
        required: [true, 'Event description required'],
        minLength: [
            10,
            'Description must be at least 10 characters long'
        ]},
    type: {
        type: String,
        trim: true,
        required: [true, 'Event type required']
        },
    date: {
        type: Date,
        required: [true, 'Event date is required'],
        min: [new Date(), 'Event cannot be scheduled before today']
    },
    intensity: {
        type: Number,
        min: [
            0,
            'Event intensity must be at least 0 stars'
        ],
        max: [
            5,
            'Event intensity must be at most 5 stars'
        ]},
    organizer: {
        type: EventOrganizerSchema,
        required: [true, 'Event organizer is required']
    },
    users: [UserSchema]
}, modelOptions);

export const Event = mongoose.model("Event", EventSchema);