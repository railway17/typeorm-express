import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CallHistory {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    Called: string;

    @Column()
    ToState: string;

    @Column()
    CallerCountry: string;
    
    @Column()
    Direction: string;
    
    @Column()
    Timestamp: string;
    
    @Column()
    CallbackSource: string;
    
    @Column()
    CallerState: string;
    
    @Column()
    ToZip: string;
    
    @Column()
    SequenceNumber: string;
    
    @Column()
    To: string;
    
    @Column()
    CallSid: string;
    
    @Column()
    ToCountry: string;
    
    @Column()
    CallerZip: string;
    
    @Column()
    CalledZip: string;
    
    @Column()
    ApiVersion: string;
    
    @Column()
    CallStatus: string;
    
    @Column()
    CalledCity: string;
    
    @Column()
    Duration: string;
    
    @Column()
    From: string;
    
    @Column()
    CallDuration: string;

    @Column()
    AccountSid: string;

    @Column()
    CalledCountry: string;

    @Column()
    CallerCity: string;

    @Column()
    ToCity: string;

    @Column()
    FromCountry: string;

    @Column()
    Caller: string;

    @Column()
    FromCity: string;

    @Column()
    CalledState: string;

    @Column()
    FromZip: string;

    @Column()
    FromState: string;
    
    @Column()
    card: string;
}