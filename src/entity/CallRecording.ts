import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CallRecording {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  RecordingSource: string;
  
  @Column()
  RecordingSid: string;
  
  @Column("text")
  RecordingUrl: string;
  
  @Column()
  RecordingStatus: string;
  
  @Column()
  RecordingChannels: string;
  
  @Column()
  ErrorCode: string;
  
  @Column()
  CallSid: string;
  
  @Column()
  RecordingStartTime: string;
  
  @Column()
  AccountSid: string;
  
  @Column()
  RecordingDuration: string;
  
  @Column()
  card: string;
}