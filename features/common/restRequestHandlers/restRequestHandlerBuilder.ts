import {PrismaClientKnownRequestError} from "@prisma/client/runtime/library";
import { badRequestErrorResponse } from "@/features/common/restResponses/badRequestErrorResponse";
import {constraintExceptionErrorResponse} from "@/features/common/restResponses/contraintExceptionErrorResponse";
import { badRequestErrorResponseFromZodIssues } from "../restResponses/badRequestErrorResponseFromZodIssues";
import { internalServerErrorResponse } from "../restResponses/internalServerErrorResponse";
import type { NextRequest, NextResponse } from "next/server";
import type { ZodIssue } from "zod";

interface RestRequestValidationResult<RequestBodyType> {
  success: boolean;
  validatedRequestBody?: RequestBodyType;
  issues?: ZodIssue[];
}

interface ValidatedRequestDetailsParams<ParamsType, RequestBodyType> {
  validatedRequestBody?: RequestBodyType;
  params?: ParamsType;
}

export interface RestRequestHandlerBuilderOptions<ParamsType, RequestBodyType> {
  onValidateParams?: (params: ParamsType) => { isValid: boolean, errorMessage?: string };
  onValidateRequestAsync?: (req: NextRequest) => Promise<RestRequestValidationResult<RequestBodyType>>;
  onValidRequestAsync: (req: NextRequest, details?: ValidatedRequestDetailsParams<ParamsType, RequestBodyType>) => Promise<NextResponse>;
}


const errorIsDueToConflictOnTheMusicianNumberConstraint = (e: unknown) => {
  // @ts-ignore
  return e instanceof PrismaClientKnownRequestError && e.code === 'P2002' && e.meta?.target[0] === 'musician_number';
}

export function restRequestHandlerBuilder<ParamsType, RequestBodyType>(options: RestRequestHandlerBuilderOptions<ParamsType, RequestBodyType>) {
  return async (req: NextRequest, params:ParamsType): Promise<NextResponse> => {
    try {
      let isValidRequest: boolean = false;
      const details: { validatedRequestBody?: RequestBodyType, params?: ParamsType} = {};

      if (options.onValidateParams) {
        const { isValid, errorMessage } = options.onValidateParams(params);
        if (!isValid) {
          if (errorMessage) {
            return badRequestErrorResponse(errorMessage);
          }

          return badRequestErrorResponse("invalid params");
        }

        details.params = params;
      }

      if(options.onValidateRequestAsync) {
        const validation = await options.onValidateRequestAsync(req);
        if (!validation.success) {
          const { issues } = validation;

          return badRequestErrorResponseFromZodIssues(issues);
        }
          details.validatedRequestBody = validation.validatedRequestBody;
          isValidRequest = true;

      } else {
        isValidRequest = true;
      }

      if(isValidRequest) {
        const response = await options.onValidRequestAsync(req, details);
        return response;
      }
        return badRequestErrorResponse();


    } catch (error) {
      if (errorIsDueToConflictOnTheMusicianNumberConstraint(error)) {
        return constraintExceptionErrorResponse("Ce numéro de joueur existe déjà")();
      }
      if(error instanceof Error) {
        return internalServerErrorResponse(error.message);
      }
      return internalServerErrorResponse();
    }
  }
}
