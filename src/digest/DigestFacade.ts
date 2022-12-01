import axios from "axios"
import { Singleton } from "typescript-ioc"
import { IDigestRequest, IDigestResponse } from "./DigestInterfaces"

@Singleton
export class DigestFacade {
    public async CreateDigest(digestRequest: IDigestRequest): Promise<IDigestResponse> {
        try {
            const digest = await axios.post("http://dss:8080/services/rest/signature/one-document/getDataToSign", digestRequest)
            return { digest: digest.data.bytes }
        } catch (error) {
            throw Error((error as any).response.data)
        }
    }
}