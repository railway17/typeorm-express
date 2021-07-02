import {Request, Response} from "express";
import { CallHistory } from "../entity/CallHistory";
import { CallRecording } from "../entity/CallRecording";
import { Transcription } from "../entity/Transcription";
import {getManager} from "typeorm";

/**
* Loads home page.
*/

export const saveStatus = async(req: Request, res: Response) => {
    const params = req.body
    const type = req.params.type
    
    const callHistoryRepository = getManager().getRepository(CallHistory);
    const callRecordingRepo = getManager().getRepository(CallRecording);
    const transcriptionRepo = getManager().getRepository(Transcription);

    if(type == '3' && typeof params.TranscriptionSid != 'undefined') {    // handle saving Transcription data
        let data = new Transcription()
        data = {...params}
        transcriptionRepo.find({ where: { TranscriptionSid: data.TranscriptionSid, CallSid: data.CallSid } })
        .then(records => {
            if(!records.length) {
                transcriptionRepo.save(data);
                res.send("New transcription is created!");
            } else {
                res.send("This transcription record is already existing....");
            }
        })
        .catch(ex=>{
            res.send("Throw exception while saving record...." + ex.toString());
        })
    } else if(type == '2' && typeof params.RecordingSource != 'undefined') { // handle saving CallRecording data
        let data = new CallRecording()
        data = {...params}
        callRecordingRepo.find({ where: { RecordingSid: data.RecordingSid, CallSid: data.CallSid } })
        .then(records => {
            if(!records.length) {
                callRecordingRepo.save(data);
                res.send("New call recording is created!");
            } else {
                res.send("This call recording record is already existing....");
            }
        })
        .catch(ex=>{
            res.send("Throw exception while saving record...." + ex.toString());
        })
    } else if (type == '1') {   // handle saving CallHistory data
        let data = new CallHistory()        
        data = {...params}
        
        callHistoryRepository.find({ where: { Timestamp: data.Timestamp, CallSid: data.CallSid } })
            .then(records => {
                if(!records.length) {
                    callHistoryRepository.save(data);
                    res.send("New call history is created!");
                } else {
                    res.send("This record is already existing....");
                }
            })
            .catch(ex=>{
                res.send("Throw exception while saving record...." + ex.toString());
            })
    }

}



export const getAllByType = async(req: Request, res: Response) => {
    const type = req.params.type
    
    const callHistoryRepository = getManager().getRepository(CallHistory);
    const callRecordingRepo = getManager().getRepository(CallRecording);
    const transcriptionRepo = getManager().getRepository(Transcription);

    if(type == '3') {    // handle saving Transcription data
        transcriptionRepo.find()
        .then(records => {
            res.send(records);
        })
        .catch(ex=>{
            res.send(ex.toString());
        })
    } else if(type == '2') { // handle saving CallRecording data
        callRecordingRepo.find()
        .then(records => {
            res.send(records);
        })
        .catch(ex=>{
            res.send(ex.toString());
        })
    } else if (type == '1') {   // handle saving CallHistory data
        callHistoryRepository.find()
        .then(records => {
            res.send(records);
        })
        .catch(ex=>{
            res.send(ex.toString());
        })
    }

}