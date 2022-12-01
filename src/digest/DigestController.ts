import { Body, Controller, Post, Route } from "tsoa";
import { Inject } from "typescript-ioc";
import { DigestFacade } from "./DigestFacade";
import { IDigestRequest, IDigestResponse } from "./DigestInterfaces";

@Route("digest")
export class DigestController extends Controller {
    @Post("xml")
    public async DigestXML(@Body() digestRequest: IDigestRequest): Promise<IDigestResponse> {
        const digest = await new DigestFacade().CreateDigest(digestRequest)
        return digest
    }

    @Post("pdf")
    public async DigestPDF(@Body() digestRequest: IDigestRequest): Promise<IDigestResponse> {
        const digest = await new DigestFacade().CreateDigest(digestRequest)
        return digest
    }
}