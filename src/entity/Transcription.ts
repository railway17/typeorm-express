import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Transcription {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  ApiVersion: string;
  
  @Column()
  TranscriptionType: string;
  
  @Column("text")
  TranscriptionUrl: string;
  
  @Column()
  TranscriptionSid: string;
  
  @Column()
  Called: string;
  
  @Column()
  RecordingSid: string;
  
  @Column()
  CallStatus: string;
  
  @Column("text")
  RecordingUrl: string;
  
  @Column()
  From: string;
  
  @Column()
  Direction: string;
  
  @Column("text")
  url: string;

  @Column()
  AccountSid: string;

  @Column("text")
  TranscriptionText: string;

  @Column()
  Caller: string;

  @Column()
  TranscriptionStatus: string;

  @Column()
  CallSid: string;

  @Column()
  To: string;

  @Column()
  ForwardedFrom: string;

  @Column()
  card: string;
}