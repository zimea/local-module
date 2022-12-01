import { Singleton } from "typescript-ioc"
import { EDigestAlgorithm } from "../types"

type EDigestMethod = EDigestAlgorithm.SHA1 | EDigestAlgorithm.SHA256 | EDigestAlgorithm.SHA512

export interface IMergingInformation {
    allowExpiredCertificate?: boolean,
    addTimestamp?: boolean,
    digestMethod: EDigestMethod
}

export interface IMergingRequest {
    payload: string,
    mergingInformation: IMergingInformation,
    signature: string
}

export interface IMergingResponse {
    signedPayload: string
}

@Singleton
export class MergingFacade {
    public async MergeXML(hashRequest: IMergingRequest): Promise<IMergingResponse> {
        return { signedPayload: "signedPayload" } as IMergingResponse
    }

    public async MergePDF(hashRequest: IMergingRequest): Promise<IMergingResponse> {
        return { signedPayload: "signedPayload" } as IMergingResponse
    }
}