import { Body, Controller, Post, Response, Route, ValidateError } from "tsoa";
import { Inject } from "typescript-ioc";
import { IMergingRequest, IMergingResponse, MergingFacade } from "./MergingFacade";

type MergingRequest = IMergingRequest

@Route("merge")
export class MergingController extends Controller {
    @Inject
    private mergingFacade: MergingFacade


    @Post("xml")
    @Response<ValidateError>("400","Bad request. Invalid request format.")
    public async MergeXML(@Body() mergingRequest: MergingRequest): Promise<IMergingResponse> {
        return await this.mergingFacade.MergeXML(mergingRequest)
    }

    @Post("pdf")
    @Response<ValidateError>("400","Bad request. Invalid request format.")
    public async MergePDF(@Body() mergingRequest: MergingRequest): Promise<IMergingResponse> {
        return await this.mergingFacade.MergePDF(mergingRequest)
    }

}